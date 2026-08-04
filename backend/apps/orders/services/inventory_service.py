from django.db import transaction

from apps.notifications.services import (
    NotificationService,
)

from apps.notifications.choices import (
    NotificationType,
)


class InventoryService:
    """
    Handles product inventory operations during order placement.

    Responsibilities:

    - Validate product stock
    - Reduce product stock
    - Create low stock dashboard notifications
    """


    @staticmethod
    def validate_stock(cart):
        """
        Check whether all cart items have enough stock.
        """

        for cart_item in cart.items.select_related(
            "product"
        ):

            product = cart_item.product


            if product.stock < cart_item.quantity:

                raise ValueError(
                    f"Insufficient stock for {product.name}"
                )



    @staticmethod
    @transaction.atomic
    def reduce_stock(cart):
        """
        Reduce product stock after successful order creation.
        """

        for cart_item in cart.items.select_related(
            "product"
        ):

            product = cart_item.product


            product.stock -= cart_item.quantity


            product.save(
                update_fields=[
                    "stock"
                ]
            )


            InventoryService.check_low_stock(
                product
            )



    @staticmethod
    def check_low_stock(product):
        """
        Create admin dashboard notification
        when product stock reaches threshold.
        """


        if product.stock <= product.low_stock_threshold:


            NotificationService.create_notification(

                notification_type=(
                    NotificationType.INVENTORY
                ),

                title="Low Stock Alert",

                message=(
                    f"{product.name} "
                    f"stock is below "
                    f"{product.low_stock_threshold}"
                ),

                notification_key=(
                    f"low-stock-{product.id}"
                ),

            )