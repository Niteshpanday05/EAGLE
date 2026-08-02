import logging
from typing import Any

from apps.payments.models import Payment

logger = logging.getLogger(__name__)


class EsewaService:
    """
    eSewa Payment Gateway Service.
    """

    def __init__(self):
        """
        Initialize eSewa configuration.
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
        Initialize eSewa payment.
        """

        logger.info(
            "Initiating eSewa payment: %s",
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
        Verify eSewa payment.
        """

        logger.info(
            "Verifying eSewa payment: %s",
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
        Refund eSewa payment.
        """

        logger.info(
            "Refunding eSewa payment: %s",
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
        Build initiate payment payload.
        """

        return {}

    def build_headers(self) -> dict[str, str]:
        """
        Build request headers.
        """

        return {}

    def parse_response(
        self,
        response: dict[str, Any],
    ) -> dict[str, Any]:
        """
        Normalize eSewa response.
        """

        return response

    def validate_signature(
        self,
        payload: dict[str, Any],
    ) -> bool:
        """
        Validate callback signature.
        """

        return True