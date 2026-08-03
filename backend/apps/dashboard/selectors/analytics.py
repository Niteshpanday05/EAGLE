from datetime import timedelta

from django.contrib.auth import get_user_model
from django.db.models import Count, Sum, Avg
from django.db.models.functions import TruncDay
from django.utils import timezone

from apps.orders.models import Order, OrderStatus
from apps.orders.models import OrderItem

User = get_user_model()


class DashboardAnalyticsSelector:

    @staticmethod
    def execute(days=30):
        start_date = timezone.now() - timedelta(days=days)

        summary = DashboardAnalyticsSelector.get_summary()

        daily_sales = DashboardAnalyticsSelector.get_daily_sales(
            start_date
        )

        top_products = DashboardAnalyticsSelector.get_top_products()

        order_status = DashboardAnalyticsSelector.get_order_status()

        return {
            "summary": summary,
            "daily_sales": daily_sales,
            "top_products": top_products,
            "order_status": order_status,
        }

    @staticmethod
    def get_summary():

        delivered_orders = Order.objects.filter(
            status=OrderStatus.DELIVERED
        )

        return {
            "total_revenue":
                delivered_orders.aggregate(
                    total=Sum("total")
                )["total"] or 0,

            "total_orders":
                Order.objects.count(),

            "total_customers":
                User.objects.filter(
                    is_staff=False
                ).count(),

            "average_order_value":
                delivered_orders.aggregate(
                    avg=Avg("total")
                )["avg"] or 0,
        }

    @staticmethod
    def get_daily_sales(start_date):

        return list(

            Order.objects.filter(
                status=OrderStatus.DELIVERED,
                created_at__gte=start_date,
            )

            .annotate(
                day=TruncDay("created_at")
            )

            .values("day")

            .annotate(
                revenue=Sum("total")
            )

            .order_by("day")

        )

    @staticmethod
    def get_top_products():

        return list(

            OrderItem.objects.values(
                "product__name"
            )

            .annotate(
                quantity=Sum("quantity")
            )

            .order_by("-quantity")[:5]

        )

    @staticmethod
    def get_order_status():

        return list(

            Order.objects.values("status")

            .annotate(
                total=Count("id")
            )

            .order_by()

        )