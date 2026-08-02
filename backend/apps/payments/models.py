from django.db import models
from django.utils import timezone

from apps.orders.models import Order
from .choices import Currency, PaymentMethod, PaymentStatus


class Payment(models.Model):
    """
    One payment record per order.
    Supports COD, Khalti, eSewa and Stripe.
    """

    # ==========================
    # Relationships
    # ==========================

    order = models.OneToOneField(
        Order,
        on_delete=models.PROTECT,
        related_name="payment",
    )

    # ==========================
    # Payment Information
    # ==========================

    payment_method = models.CharField(
        max_length=20,
        choices=PaymentMethod.choices,
    )

    status = models.CharField(
        max_length=20,
        choices=PaymentStatus.choices,
        default=PaymentStatus.PENDING,
        db_index=True,
    )

    amount = models.DecimalField(
        max_digits=12,
        decimal_places=2,
    )

    currency = models.CharField(
        max_length=10,
        choices=Currency.choices,
        default=Currency.NPR,
    )

    # ==========================
    # Internal Reference
    # ==========================

    reference = models.CharField(
        max_length=100,
        unique=True,
        db_index=True,
        help_text="Internal payment reference.",
    )

    transaction_id = models.CharField(
        max_length=255,
        unique=True,
        blank=True,
        null=True,
        db_index=True,
        help_text="Transaction ID returned by payment gateway.",
    )

    # ==========================
    # Gateway Information
    # ==========================

    gateway = models.CharField(
        max_length=30,
        blank=True,
        help_text="Gateway used for this payment.",
    )

    gateway_payment_id = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )

    gateway_response = models.JSONField(
        default=dict,
        blank=True,
    )

    # ==========================
    # Failure Information
    # ==========================

    failure_reason = models.TextField(
        blank=True,
    )

    # ==========================
    # Payment Dates
    # ==========================

    paid_at = models.DateTimeField(
        null=True,
        blank=True,
    )

    verified_at = models.DateTimeField(
        null=True,
        blank=True,
    )

    # ==========================
    # Audit Fields
    # ==========================

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        db_table = "payments"
        ordering = ["-created_at"]

        indexes = [
            models.Index(fields=["status"]),
            models.Index(fields=["payment_method"]),
            models.Index(fields=["reference"]),
            models.Index(fields=["transaction_id"]),
        ]

    def __str__(self):
        return f"{self.reference} ({self.status})"

    @property
    def is_paid(self):
        return self.status == PaymentStatus.SUCCESS

    @property
    def can_retry(self):
        return self.status in [
            PaymentStatus.FAILED,
            PaymentStatus.CANCELLED,
        ]

    @property
    def can_refund(self):
        return self.status == PaymentStatus.SUCCESS

    def mark_processing(self):
        self.status = PaymentStatus.PROCESSING
        self.save(update_fields=["status", "updated_at"])

    def mark_success(self):
        now = timezone.now()

        self.status = PaymentStatus.SUCCESS
        self.paid_at = now
        self.verified_at = now

        self.save(
            update_fields=[
                "status",
                "paid_at",
                "verified_at",
                "updated_at",
            ]
        )

    def mark_failed(self, reason=""):
        self.status = PaymentStatus.FAILED
        self.failure_reason = reason

        self.save(
            update_fields=[
                "status",
                "failure_reason",
                "updated_at",
            ]
        )

    def mark_cancelled(self):
        self.status = PaymentStatus.CANCELLED

        self.save(
            update_fields=[
                "status",
                "updated_at",
            ]
        )

    def mark_refunded(self):
        self.status = PaymentStatus.REFUNDED

        self.save(
            update_fields=[
                "status",
                "updated_at",
            ]
        )