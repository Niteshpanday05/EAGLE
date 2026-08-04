from django.db import transaction

from apps.orders.models import OrderItem

from apps.notifications.services import (
    NotificationService,
)

from apps.notifications.choices import (
    NotificationType,
)



class OrderItemService:


    @staticmethod
    @transaction.atomic
    def create(order, cart):


        items = []


        for cart_item in cart.items.select_related(
            "product"
        ):


            product = cart_item.product


            # Reduce stock

            product.stock -= cart_item.quantity


            product.save(
                update_fields=[
                    "stock"
                ]
            )


            # Low stock notification

            if (
                hasattr(
                    product,
                    "low_stock_threshold"
                )
                and
                product.stock <= product.low_stock_threshold
            ):


                NotificationService.create_notification(

                    notification_type=(
                        NotificationType.INVENTORY
                    ),

                    title="Low Stock Alert",

                    message=(
                        f"{product.name} "
                        f"stock is below "
                        f"{product.low_stock_threshold}"
                    )

                )



            items.append(

                OrderItem(

                    order=order,

                    product=product,

                    quantity=cart_item.quantity,

                    unit_price=product.price,

                    subtotal=(
                        product.price
                        *
                        cart_item.quantity
                    ),

                )

            )


        OrderItem.objects.bulk_create(
            items
        )