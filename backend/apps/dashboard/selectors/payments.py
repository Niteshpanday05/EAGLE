from django.db.models import Count, Sum

from apps.payments.models import Payment
from apps.payments.choices import PaymentStatus


class DashboardPaymentsSelector:
    """
    Dashboard payment database queries.
    """


    @classmethod
    def execute(cls):

        return {

            "summary":
                cls.get_summary(),

            "payment_methods":
                cls.get_payment_methods(),

            "gateways":
                cls.get_gateways(),

            "recent_payments":
                cls.get_recent_payments(),

        }


    @classmethod
    def get_summary(cls):

        return {

            "total_payments":
                Payment.objects.count(),


            "successful_payments":
                Payment.objects.filter(
                    status=PaymentStatus.SUCCESS
                ).count(),


            "pending_payments":
                Payment.objects.filter(
                    status=PaymentStatus.PENDING
                ).count(),


            "processing_payments":
                Payment.objects.filter(
                    status=PaymentStatus.PROCESSING
                ).count(),


            "failed_payments":
                Payment.objects.filter(
                    status=PaymentStatus.FAILED
                ).count(),


            "cancelled_payments":
                Payment.objects.filter(
                    status=PaymentStatus.CANCELLED
                ).count(),


            "refunded_payments":
                Payment.objects.filter(
                    status=PaymentStatus.REFUNDED
                ).count(),


            "total_revenue":

                Payment.objects.filter(
                    status=PaymentStatus.SUCCESS
                )
                .aggregate(
                    total=Sum("amount")
                )
                .get("total")
                or 0,

        }



    @classmethod
    def get_payment_methods(cls):

        return list(

            Payment.objects
            .values(
                "payment_method"
            )
            .annotate(

                total=Count("id"),

                revenue=Sum("amount")

            )
            .order_by("-total")

        )



    @classmethod
    def get_gateways(cls):

        return list(

            Payment.objects
            .exclude(
                gateway=""
            )
            .values(
                "gateway"
            )
            .annotate(

                total=Count("id"),

                revenue=Sum("amount")

            )
            .order_by("-total")

        )



    @classmethod
    def get_recent_payments(cls):

        payments = (

            Payment.objects
            .select_related(
                "order"
            )
            .order_by(
                "-created_at"
            )[:10]

        )


        return [

            {

                "reference":
                    payment.reference,


                "order_number":
                    payment.order.order_number,


                "method":
                    payment.payment_method,


                "gateway":
                    payment.gateway,


                "status":
                    payment.status,


                "amount":
                    payment.amount,


                "currency":
                    payment.currency,


                "created_at":
                    payment.created_at,


            }

            for payment in payments

        ]