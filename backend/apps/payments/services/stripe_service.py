import logging
from typing import Any

from apps.payments.models import Payment

logger = logging.getLogger(__name__)


class StripeService:
    """
    Stripe Payment Gateway Service.
    """

    def __init__(self):
        """
        Initialize Stripe configuration.
        """
        pass

    # ==========================================================
    # Payment Initialization
    # ==========================================================

    def initiate_payment(
        self,
        payment: Payment,
    ) -> dict[str, Any]:
        """
        Create Stripe Checkout Session or Payment Intent.
        """

        logger.info(
            "Initiating Stripe payment: %s",
            payment.reference,
        )

        return {
            "success": False,
            "message": "Not implemented.",
            "response": {},
        }

    # ==========================================================
    # Payment Verification
    # ==========================================================

    def verify_payment(
        self,
        payment: Payment,
        **kwargs,
    ) -> dict[str, Any]:
        """
        Verify Stripe payment.
        """

        logger.info(
            "Verifying Stripe payment: %s",
            payment.reference,
        )

        return {
            "success": False,
            "message": "Not implemented.",
            "transaction_id": "",
            "gateway_payment_id": "",
            "response": {},
        }

    # ==========================================================
    # Refund
    # ==========================================================

    def refund_payment(
        self,
        payment: Payment,
    ) -> dict[str, Any]:
        """
        Refund Stripe payment.
        """

        logger.info(
            "Refunding Stripe payment: %s",
            payment.reference,
        )

        return {
            "success": False,
            "message": "Refund not implemented.",
            "response": {},
        }

    # ==========================================================
    # Helpers
    # ==========================================================

    def build_payload(
        self,
        payment: Payment,
    ) -> dict[str, Any]:
        """
        Build Stripe payload.
        """

        return {}

    def build_headers(self) -> dict[str, str]:
        """
        Stripe SDK usually handles authentication,
        but this method is kept for consistency.
        """

        return {}

    def parse_response(
        self,
        response: dict[str, Any],
    ) -> dict[str, Any]:
        """
        Normalize Stripe response.
        """

        return response

    def validate_signature(
        self,
        payload: dict[str, Any],
    ) -> bool:
        """
        Validate Stripe webhook signature.
        """

        return True