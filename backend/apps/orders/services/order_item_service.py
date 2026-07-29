from apps.orders.models import OrderItem


class OrderItemService:

    @staticmethod
    def create(order, cart):

        items = []

        for cart_item in cart.items.select_related("product"):

            items.append(
                OrderItem(
                    order=order,
                    product=cart_item.product,
                    quantity=cart_item.quantity,
                    unit_price=cart_item.product.price,
                    subtotal=(
                        cart_item.product.price
                        * cart_item.quantity
                    ),
                )
            )

        OrderItem.objects.bulk_create(items)