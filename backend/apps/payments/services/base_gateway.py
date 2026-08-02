from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any

from apps.payments.models import Payment


class BaseGateway(ABC):
    """
    Base interface for all payment gateways.

    Every payment provider (Khalti, eSewa, Stripe, etc.)
    must implement this interface.
    """

    gateway_name: str

    @abstractmethod
    def initiate(self, payment: Payment) -> dict[str, Any]:
        """
        Initialize a payment.

        Returns:
            {
                "success": True,
                "payment_url": "...",
                "transaction_id": "...",
                ...
            }
        """
        raise NotImplementedError

    @abstractmethod
    def verify(self, payment: Payment, **kwargs) -> dict[str, Any]:
        """
        Verify payment with gateway.

        Returns:
            {
                "success": True,
                "transaction_id": "...",
                "gateway_payment_id": "...",
                ...
            }
        """
        raise NotImplementedError

    @abstractmethod
    def refund(
        self,
        payment: Payment,
        amount: float | None = None,
    ) -> dict[str, Any]:
        """
        Refund a payment.

        Returns:
            {
                "success": True,
                "refund_id": "...",
            }
        """
        raise NotImplementedError

    @abstractmethod
    def webhook(
        self,
        payload: dict[str, Any],
    ) -> dict[str, Any]:
        """
        Process webhook payload.

        Returns normalized gateway response.
        """
        raise NotImplementedError
    