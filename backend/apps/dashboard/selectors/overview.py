from django.contrib.auth import get_user_model
from django.db.models import Sum

from apps.orders.models import Order, OrderStatus
from apps.products.models import Product

User = get_user_model()


class DashboardOverviewSelector:
    """
    Read-only queries for dashboard overview.
    """

    @staticmethod
    def execute():
        total_products = Product.objects.count()

        total_customers = User.objects.filter(
            is_staff=False,
        ).count()

        total_orders = Order.objects.count()

        pending_orders = Order.objects.filter(
            status=OrderStatus.PENDING,
        ).count()

        completed_orders = Order.objects.filter(
            status=OrderStatus.DELIVERED,
        ).count()

        total_revenue = (
            Order.objects.filter(
                status=OrderStatus.DELIVERED,
            )
            .aggregate(total=Sum("total"))
            .get("total")
            or 0
        )

        return {
            "total_products": total_products,
            "total_customers": total_customers,
            "total_orders": total_orders,
            "pending_orders": pending_orders,
            "completed_orders": completed_orders,
            "total_revenue": total_revenue,
        }