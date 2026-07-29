from django.shortcuts import get_object_or_404

from apps.orders.models import Order


class OrderSelector:

    @staticmethod
    def get_orders(user):
        return (
            Order.objects.filter(user=user)
            .select_related("shipping_address")
            .prefetch_related("items__product")
            .order_by("-created_at")
        )

    @staticmethod
    def get_order(user, order_number):
        return get_object_or_404(
            Order.objects.select_related(
                "shipping_address",
            ).prefetch_related(
                "items__product",
            ),
            user=user,
            order_number=order_number,
        )