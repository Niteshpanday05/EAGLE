from apps.orders.models import Order


class OrderSelector:

    @staticmethod
    def get_user_orders(user):

        return (
            Order.objects.filter(user=user)
            .prefetch_related(
                "items",
                "items__product",
                "shipping_address",
            )
            .order_by("-created_at")
        )

    @staticmethod
    def get_order(user, order_id):

        return (
            Order.objects.prefetch_related(
                "items",
                "items__product",
                "shipping_address",
            )
            .get(
                id=order_id,
                user=user,
            )
        )