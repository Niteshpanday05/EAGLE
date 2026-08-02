import logging

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
    Central service for all payment operations.

    Responsibilities:
    - Create payment
    - Retrieve payment
    - Select payment gateway
    - Initiate payment
    - Verify payment
    - Refund payment
    """

    # ==========================================================
    # Payment CRUD
    # ==========================================================

    @staticmethod
    @transaction.atomic
    def create_payment(order: Order) -> Payment:
        """
        Create a payment record for an order.

        Returns existing payment if already created.
        """

        payment, _ = Payment.objects.get_or_create(
            order=order,
            defaults={
                "payment_method": order.payment_method,
                "amount": order.total,
                "reference": order.order_number,
            },
        )

        return payment

    @staticmethod
    def get_payment(payment_id) -> Payment:
        """
        Retrieve payment by primary key.
        """

        return get_object_or_404(
            Payment,
            pk=payment_id,
        )

    @staticmethod
    def get_payment_by_reference(reference: str) -> Payment:
        """
        Retrieve payment using internal reference.
        """

        return get_object_or_404(
            Payment,
            reference=reference,
        )

    # ==========================================================
    # Gateway Selection
    # ==========================================================

    @staticmethod
    def get_gateway(payment: Payment):
        """
        Return the gateway service based on payment method.
        """

        if payment.payment_method == PaymentMethod.KHALTI:
            return KhaltiService()

        if payment.payment_method == PaymentMethod.ESEWA:
            return EsewaService()

        if payment.payment_method == PaymentMethod.STRIPE:
            return StripeService()

        return None

    # ==========================================================
    # Helpers
    # ==========================================================

    @staticmethod
    @transaction.atomic
    def save_gateway_response(
        payment: Payment,
        response: dict,
    ) -> Payment:
        """
        Save raw gateway response.
        """

        payment.gateway_response = response

        payment.save(
            update_fields=[
                "gateway_response",
                "updated_at",
            ]
        )

        return payment

    @staticmethod
    @transaction.atomic
    def save_transaction(
        payment: Payment,
        transaction_id: str,
        gateway_payment_id: str | None = None,
    ) -> Payment:
        """
        Save transaction information.
        """

        payment.transaction_id = transaction_id
        payment.gateway_payment_id = gateway_payment_id

        payment.save(
            update_fields=[
                "transaction_id",
                "gateway_payment_id",
                "updated_at",
            ]
        )

        return payment
    
    
        # ==========================================================
    # Payment Initiation
    # ==========================================================

    @classmethod
    @transaction.atomic
    def initiate_payment(cls, payment: Payment) -> dict:
        """
        Initiate payment.

        COD:
            Mark payment as successful immediately.

        Online Payment:
            Mark payment as processing and
            initialize the gateway session.
        """

        # Cash on Delivery
        if payment.payment_method == PaymentMethod.CASH_ON_DELIVERY:
            payment.mark_success()

            logger.info(
                "COD payment created: %s",
                payment.reference,
            )

            return {
                "success": True,
                "payment_method": payment.payment_method,
                "payment_status": payment.status,
                "message": "Cash on Delivery selected.",
            }

        gateway = cls.get_gateway(payment)

        if gateway is None:
            raise ValueError("Unsupported payment method.")

        payment.mark_processing()

        response = gateway.initiate_payment(payment)

        cls.save_gateway_response(
            payment,
            response,
        )

        logger.info(
            "Payment initiated: %s",
            payment.reference,
        )

        return response
    
        # ==========================================================
    # Payment Verification
    # ==========================================================

    @classmethod
    @transaction.atomic
    def verify_payment(
        cls,
        payment: Payment,
        **kwargs,
    ) -> dict:
        """
        Verify payment with the selected gateway.
        """

        if payment.payment_method == PaymentMethod.CASH_ON_DELIVERY:
            return {
                "success": True,
                "payment_status": payment.status,
                "message": "Cash on Delivery does not require verification.",
            }

        gateway = cls.get_gateway(payment)

        if gateway is None:
            raise ValueError("Unsupported payment method.")

        response = gateway.verify_payment(
            payment=payment,
            **kwargs,
        )

        cls.save_gateway_response(
            payment,
            response,
        )

        if response.get("success"):

            cls.save_transaction(
                payment=payment,
                transaction_id=response.get("transaction_id", ""),
                gateway_payment_id=response.get(
                    "gateway_payment_id",
                ),
            )

            payment.mark_success()

            logger.info(
                "Payment verified successfully: %s",
                payment.reference,
            )

        else:

            payment.mark_failed(
                response.get(
                    "message",
                    "Payment verification failed.",
                )
            )

            logger.warning(
                "Payment verification failed: %s",
                payment.reference,
            )

        return response
    
        # ==========================================================
    # Refund
    # ==========================================================

    @classmethod
    @transaction.atomic
    def refund_payment(cls, payment: Payment) -> dict:
        """
        Refund a successful payment.
        """

        if not payment.can_refund:
            raise ValueError("This payment cannot be refunded.")

        gateway = cls.get_gateway(payment)

        if gateway is None:
            raise ValueError("Refund is not supported for this payment method.")

        response = gateway.refund_payment(payment)

        cls.save_gateway_response(
            payment,
            response,
        )

        if response.get("success"):
            payment.mark_refunded()

            logger.info(
                "Payment refunded: %s",
                payment.reference,
            )
        else:
            logger.warning(
                "Refund failed: %s",
                payment.reference,
            )

        return response