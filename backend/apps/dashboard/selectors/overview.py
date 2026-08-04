from django.contrib.auth import get_user_model
from django.db.models import Sum, Count
from django.db.models.functions import TruncDate

from apps.orders.models import Order
from apps.orders.choices import OrderStatus
from apps.products.models import Product


User = get_user_model()


class DashboardOverviewSelector:
    """
    Dashboard overview read-only database queries.

    Returns data required by:
    DashboardOverviewSerializer
    """


    @classmethod
    def execute(cls):

        return {

            "total_products":
                cls.get_total_products(),


            "total_customers":
                cls.get_total_customers(),


            "total_orders":
                cls.get_total_orders(),


            "pending_orders":
                cls.get_pending_orders(),


            "completed_orders":
                cls.get_completed_orders(),


            "total_revenue":
                cls.get_total_revenue(),


            "daily_revenue":
                cls.get_daily_revenue(),


            "order_status":
                cls.get_order_status(),

        }



    @staticmethod
    def get_total_products():

        return Product.objects.count()



    @staticmethod
    def get_total_customers():

        return (
            User.objects
            .filter(
                is_staff=False
            )
            .count()
        )



    @staticmethod
    def get_total_orders():

        return Order.objects.count()



    @staticmethod
    def get_pending_orders():

        return (
            Order.objects
            .filter(
                status=OrderStatus.PENDING
            )
            .count()
        )



    @staticmethod
    def get_completed_orders():

        return (
            Order.objects
            .filter(
                status=OrderStatus.DELIVERED
            )
            .count()
        )



    @staticmethod
    def get_total_revenue():

        revenue = (
            Order.objects
            .filter(
                status=OrderStatus.DELIVERED
            )
            .aggregate(
                total=Sum("total")
            )
            .get("total")
        )

        return revenue or 0



    @staticmethod
    def get_daily_revenue():

        return list(

            Order.objects
            .filter(
                status=OrderStatus.DELIVERED
            )
            .annotate(
                day=TruncDate("created_at")
            )
            .values(
                "day"
            )
            .annotate(
                revenue=Sum("total")
            )
            .order_by(
                "day"
            )

        )



    @staticmethod
    def get_order_status():

        return list(

            Order.objects
            .values(
                "status"
            )
            .annotate(
                total=Count("id")
            )
            .order_by(
                "status"
            )

        )