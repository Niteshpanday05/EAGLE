import logging
import uuid

from django.db import transaction
from django.shortcuts import get_object_or_404

from apps.orders.models import Order
from apps.payments.models import Payment
from apps.payments.choices import PaymentMethod

from .khalti_service import KhaltiService
from .esewa_service import EsewaService
from .stripe_service import StripeService


logger = logging.getLogger(__name__)


class PaymentService:
    """
    Handles all payment operations.
    """


    GATEWAYS = {

        PaymentMethod.KHALTI:
            KhaltiService(),

        PaymentMethod.ESEWA:
            EsewaService(),

        PaymentMethod.STRIPE:
            StripeService(),

    }



    # ===============================
    # Create Payment
    # ===============================


    @staticmethod
    @transaction.atomic
    def create_payment(
        order: Order,
    ) -> Payment:


        payment, created = Payment.objects.get_or_create(

            order=order,

            defaults={

                "payment_method":
                    order.payment_method,


                "amount":
                    order.total,


                "reference":
                    f"PAY-{uuid.uuid4().hex[:12].upper()}",

            },
        )


        return payment



    # ===============================
    # Retrieve
    # ===============================


    @staticmethod
    def get_payment(
        payment_id,
    ):

        return get_object_or_404(
            Payment,
            id=payment_id,
        )



    @staticmethod
    def get_gateway(
        payment,
    ):

        return PaymentService.GATEWAYS.get(
            payment.payment_method
        )



    # ===============================
    # Initiate Payment
    # ===============================


    @classmethod
    @transaction.atomic
    def initiate_payment(
        cls,
        payment,
    ):


        if payment.payment_method == PaymentMethod.COD:


            payment.mark_success()


            return {

                "success": True,

                "status":
                    payment.status,

                "message":
                    "COD order confirmed.",

            }



        gateway = cls.get_gateway(payment)


        if not gateway:

            raise ValueError(
                "Unsupported payment gateway"
            )


        payment.mark_processing()


        response = gateway.initiate(
            payment
        )


        payment.gateway_response = response


        payment.save(
            update_fields=[
                "gateway_response",
                "updated_at",
            ]
        )


        return response



    # ===============================
    # Verify Payment
    # ===============================


    @classmethod
    @transaction.atomic
    def verify_payment(
        cls,
        payment,
        **kwargs,
    ):


        if payment.payment_method == PaymentMethod.COD:

            return {

                "success":True,

                "message":
                "COD does not require verification"

            }



        gateway = cls.get_gateway(payment)


        if not gateway:

            raise ValueError(
                "Unsupported gateway"
            )



        response = gateway.verify(
            payment,
            **kwargs
        )


        payment.gateway_response = response



        if response.get("success"):


            payment.mark_success(

                transaction_id =
                    response.get(
                        "transaction_id"
                    ),

                gateway_response=response,

            )


            logger.info(
                "Payment success %s",
                payment.reference
            )


        else:


            payment.mark_failed(

                response.get(
                    "message",
                    "Payment failed"
                )

            )


        return response



    # ===============================
    # Refund
    # ===============================


    @classmethod
    @transaction.atomic
    def refund_payment(
        cls,
        payment,
    ):


        if not payment.can_refund:

            raise ValueError(
                "Payment cannot be refunded"
            )


        gateway = cls.get_gateway(payment)


        if not gateway:

            raise ValueError(
                "Refund not supported"
            )


        response = gateway.refund(
            payment
        )


        payment.gateway_response = response


        if response.get("success"):

            payment.mark_refunded()


        return response