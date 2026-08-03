from django.contrib.auth import get_user_model
from django.db.models import Count, Sum
from django.utils import timezone

from apps.orders.models import Order
from apps.payments.models import Payment


User = get_user_model()


class DashboardReportsSelector:
    """
    Dashboard reporting queries.
    """


    @classmethod
    def execute(cls):

        return {

            "sales":
                cls.get_sales_report(),

            "orders":
                cls.get_order_report(),

            "customers":
                cls.get_customer_report(),

            "revenue_by_payment":
                cls.get_revenue_by_payment(),

        }


    @classmethod
    def get_sales_report(cls):

        revenue = (

            Payment.objects
            .filter(
                status="SUCCESS"
            )
            .aggregate(
                total=Sum("amount")
            )
            .get("total")
            or 0

        )


        return {

            "total_revenue": revenue,

            "total_transactions":
                Payment.objects.count(),

        }



    @classmethod
    def get_order_report(cls):

        return {

            "total_orders":
                Order.objects.count(),


            "completed_orders":
                Order.objects.filter(
                    status="delivered"
                ).count(),


            "cancelled_orders":
                Order.objects.filter(
                    status="cancelled"
                ).count(),

        }



    @classmethod
    def get_customer_report(cls):

        return {

            "total_customers":
                User.objects
                .filter(
                    is_staff=False
                )
                .count(),


            "registered_this_year":
                User.objects.filter(
                    date_joined__year=
                    timezone.now().year
                )
                .count(),

        }



    @classmethod
    def get_revenue_by_payment(cls):

        return list(

            Payment.objects
            .values(
                "payment_method"
            )
            .annotate(
                revenue=Sum("amount"),
                count=Count("id")
            )
            .order_by(
                "-revenue"
            )

        )