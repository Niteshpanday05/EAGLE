class PaymentError(Exception):
    """Base payment exception."""


class PaymentNotFound(PaymentError):
    """Payment not found."""


class InvalidPaymentStatus(PaymentError):
    """Invalid payment status transition."""


class PaymentAlreadyCompleted(PaymentError):
    """Payment is already completed."""


class PaymentVerificationFailed(PaymentError):
    """Gateway verification failed."""