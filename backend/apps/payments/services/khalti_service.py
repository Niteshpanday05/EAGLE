import logging
from typing import Any

from apps.payments.models import Payment

logger = logging.getLogger(__name__)


class KhaltiService:
    """
    Khalti Payment Gateway Service.

    Responsibilities:
    - Initiate payment
    - Verify payment
    - Refund payment
    - Handle gateway response
    """

    def __init__(self):
        """
        Initialize Khalti configuration.

        Example:
            self.secret_key
            self.base_url
            self.headers
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
        Create a payment session with Khalti.

        Returns:
            {
                "success": bool,
                "payment_url": str,
                "transaction_id": str,
                "gateway_payment_id": str,
                "message": str,
                "response": dict,
            }
        """

        logger.info(
            "Initiating Khalti payment: %s",
            payment.reference,
        )

        # TODO:
        # Build payload
        # Send request to Khalti
        # Parse response

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
        Verify Khalti payment.

        kwargs may contain:
            pidx
            token
            transaction_id
            etc.
        """

        logger.info(
            "Verifying Khalti payment: %s",
            payment.reference,
        )

        # TODO:
        # Verify payment with Khalti

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
        Refund a Khalti payment.
        """

        logger.info(
            "Refund request: %s",
            payment.reference,
        )

        # TODO:
        # Refund payment

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
        Normalize Khalti response.
        """

        return response

    def validate_signature(
        self,
        payload: dict[str, Any],
    ) -> bool:
        """
        Validate callback signature.

        Implement if required by the gateway.
        """

        return True