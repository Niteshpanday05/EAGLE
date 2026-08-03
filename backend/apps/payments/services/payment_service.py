import logging

from django.db import transaction
from django.shortcuts import get_object_or_404

from apps.orders.models import Order
from apps.payments.models import Payment
from apps.payments.choices import (
    PaymentMethod,
    PaymentStatus,
)

from .khalti_service import KhaltiService
from .esewa_service import EsewaService
from .stripe_service import StripeService


logger = logging.getLogger(__name__)


class PaymentService:
    """
    Handles all payment business logic.

    Responsibilities:
    - Create payment
    - Retrieve payment
    - Select payment gateway
    - Initiate payment
    - Verify payment
    - Refund payment
    """

    # =====================================================
    # Create Payment
    # =====================================================

    @staticmethod
    @transaction.atomic
    def create_payment(
        order: Order,
    ) -> Payment:

        payment, created = Payment.objects.get_or_create(
            order=order,
            defaults={
                "payment_method": order.payment_method,
                "amount": order.total,
                "reference": f"PAY-{order.order_number}",
                "gateway": order.payment_method,
            },
        )

        if created:
            logger.info(
                "Payment created: %s",
                payment.reference,
            )

        return payment

    # =====================================================
    # Get Payment
    # =====================================================

    @staticmethod
    def get_payment_by_reference(
        reference: str,
    ) -> Payment:

        return get_object_or_404(
            Payment,
            reference=reference,
        )

    # =====================================================
    # Select Gateway
    # =====================================================

    @staticmethod
    def get_gateway(
        payment: Payment,
    ):

        gateways = {
            PaymentMethod.KHALTI: KhaltiService(),
            PaymentMethod.ESEWA: EsewaService(),
            PaymentMethod.STRIPE: StripeService(),
        }

        return gateways.get(
            payment.payment_method,
        )

    # =====================================================
    # Initiate Payment
    # =====================================================

    @classmethod
    @transaction.atomic
    def initiate_payment(
        cls,
        payment: Payment,
    ):

        logger.info(
            "Initiating payment %s (%s)",
            payment.reference,
            payment.payment_method,
        )

        # Prevent duplicate processing
        if payment.status == PaymentStatus.SUCCESS:

            return {
                "success": True,
                "payment_method": payment.payment_method,
                "status": payment.status,
                "message": "Payment already completed.",
            }

        # =================================================
        # Cash On Delivery
        # =================================================

        if payment.payment_method == PaymentMethod.COD:

            payment.mark_success()

            logger.info(
                "COD payment completed: %s",
                payment.reference,
            )

            return {
                "success": True,
                "payment_method": payment.payment_method,
                "status": payment.status,
                "message": "Order placed with Cash on Delivery.",
            }

        # =================================================
        # Online Payment
        # =================================================

        gateway = cls.get_gateway(
            payment,
        )

        if gateway is None:

            raise ValueError(
                "Unsupported payment gateway."
            )

        payment.mark_processing()

        response = gateway.initiate(
            payment,
        )

        payment.gateway_response = response

        payment.save(
            update_fields=[
                "gateway_response",
                "updated_at",
            ],
        )

        logger.info(
            "Payment initiated: %s",
            payment.reference,
        )

        return response

    # =====================================================
    # Verify Payment
    # =====================================================

    @classmethod
    @transaction.atomic
    def verify_payment(
        cls,
        payment: Payment,
        **kwargs,
    ):

        if payment.payment_method == PaymentMethod.COD:

            return {
                "success": True,
                "status": payment.status,
            }

        gateway = cls.get_gateway(
            payment,
        )

        if gateway is None:

            raise ValueError(
                "Unsupported payment gateway."
            )

        response = gateway.verify(
            payment,
            **kwargs,
        )

        payment.gateway_response = response

        payment.save(
            update_fields=[
                "gateway_response",
                "updated_at",
            ],
        )

        if response.get("success"):

            payment.mark_success()

            logger.info(
                "Payment verified: %s",
                payment.reference,
            )

        else:

            payment.mark_failed(
                response.get(
                    "message",
                    "Payment failed.",
                )
            )

            logger.warning(
                "Payment failed: %s",
                payment.reference,
            )

        return response

    # =====================================================
    # Refund Payment
    # =====================================================

    @classmethod
    @transaction.atomic
    def refund_payment(
        cls,
        payment: Payment,
    ):

        if not payment.can_refund:

            raise ValueError(
                "Payment cannot be refunded."
            )

        gateway = cls.get_gateway(
            payment,
        )

        if gateway is None:

            raise ValueError(
                "Refund not supported for this payment method."
            )

        response = gateway.refund(
            payment,
        )

        if response.get("success"):

            payment.mark_refunded()

            logger.info(
                "Payment refunded: %s",
                payment.reference,
            )

        return response