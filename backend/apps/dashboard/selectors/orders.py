from django.db.models import Count

from apps.orders.models import Order


class DashboardOrdersSelector:
    """
    Read-only queries for dashboard orders.
    """

    @staticmethod
    def execute(limit=10):
        return {
            "status_summary": DashboardOrdersSelector.get_status_summary(),
            "recent_orders": DashboardOrdersSelector.get_recent_orders(limit),
        }

    @staticmethod
    def get_status_summary():
        summary = (
            Order.objects.values("status")
            .annotate(total=Count("id"))
            .order_by()
        )

        return list(summary)

    @staticmethod
    def get_recent_orders(limit):
        orders = (
            Order.objects.select_related("user")
            .order_by("-created_at")[:limit]
        )

        return [
            {
                "order_number": order.order_number,
                "customer": order.user.get_full_name() or order.user.email,
                "status": order.status,
                "total": order.total,
                "created_at": order.created_at,
            }
            for order in orders
        ]