from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any

from apps.payments.models import Payment


class BaseGateway(ABC):
    """
    Abstract payment gateway interface.

    Every payment provider must implement
    payment initiation and verification.

    Examples:
        - KhaltiGateway
        - EsewaGateway
        - StripeGateway
    """

    gateway_name: str = ""


    @abstractmethod
    def initiate(
        self,
        payment: Payment,
    ) -> dict[str, Any]:
        """
        Create payment request.

        Expected response:

        {
            "success": True,
            "payment_url": "",
            "gateway_payment_id": "",
        }
        """

        raise NotImplementedError



    @abstractmethod
    def verify(
        self,
        payment: Payment,
        **kwargs: Any,
    ) -> dict[str, Any]:
        """
        Verify payment with gateway.

        Expected response:

        {
            "success": True,
            "transaction_id": "",
            "gateway_payment_id": "",
        }
        """

        raise NotImplementedError



    def refund(
        self,
        payment: Payment,
        amount: float | None = None,
    ) -> dict[str, Any]:
        """
        Refund payment.

        Override only if gateway supports refunds.
        """

        return {
            "success": False,
            "message": (
                f"{self.gateway_name} "
                "does not support refunds"
            ),
        }



    def webhook(
        self,
        payload: dict[str, Any],
    ) -> dict[str, Any]:
        """
        Handle gateway webhook.

        Override only if gateway provides webhooks.
        """

        return {
            "success": False,
            "message": (
                f"{self.gateway_name} "
                "does not support webhooks"
            ),
        }