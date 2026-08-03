from datetime import timedelta

from django.contrib.auth import get_user_model
from django.db.models import Count
from django.db.models.functions import TruncDate
from django.utils import timezone


User = get_user_model()


class DashboardCustomersSelector:
    """
    Customer related dashboard queries.
    """


    @classmethod
    def execute(cls):

        return {

            "summary":
                cls.get_summary(),

            "recent_customers":
                cls.get_recent_customers(),

            "growth":
                cls.get_growth(),

        }


    @classmethod
    def get_summary(cls):

        today = timezone.now().date()

        month_start = today.replace(
            day=1
        )


        return {

            "total_customers":
                User.objects
                .filter(
                    is_staff=False
                )
                .count(),


            "new_today":
                User.objects
                .filter(
                    is_staff=False,
                    date_joined__date=today,
                )
                .count(),


            "new_this_month":
                User.objects
                .filter(
                    is_staff=False,
                    date_joined__date__gte=month_start,
                )
                .count(),

        }


    @classmethod
    def get_recent_customers(cls):

        customers = (

            User.objects
            .filter(
                is_staff=False
            )
            .order_by(
                "-date_joined"
            )[:10]

        )


        return [

            {
                "id": customer.id,

                "email": customer.email,

                "name":
                    customer.get_full_name()
                    or customer.email,

                "joined_at":
                    customer.date_joined,

            }

            for customer in customers

        ]


    @classmethod
    def get_growth(cls):

        start_date = (
            timezone.now()
            - timedelta(days=30)
        )


        growth = (

            User.objects
            .filter(
                is_staff=False,
                date_joined__gte=start_date,
            )
            .annotate(
                date=TruncDate(
                    "date_joined"
                )
            )
            .values(
                "date"
            )
            .annotate(
                total=Count("id")
            )
            .order_by(
                "date"
            )

        )


        return list(growth)