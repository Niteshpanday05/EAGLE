import uuid

from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator
from django.db import models
from django.utils import timezone
from django.utils.text import slugify

from apps.products.models import Product


class Deal(models.Model):

    class DiscountType(models.TextChoices):
        PERCENTAGE = "percentage", "Percentage"
        FIXED = "fixed", "Fixed Amount"

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    name = models.CharField(
        max_length=255,
        db_index=True,
    )

    slug = models.SlugField(
        max_length=255,
        unique=True,
        blank=True,
    )

    description = models.TextField(
        blank=True,
    )

    discount_type = models.CharField(
        max_length=20,
        choices=DiscountType.choices,
    )

    discount_value = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[
            MinValueValidator(0),
        ],
    )

    starts_at = models.DateTimeField()

    ends_at = models.DateTimeField()

    max_uses = models.PositiveIntegerField(
        null=True,
        blank=True,
        help_text=(
            "Maximum number of times this deal can be used. "
            "Leave empty for unlimited usage."
        ),
    )

    used_count = models.PositiveIntegerField(
        default=0,
    )

    priority = models.PositiveIntegerField(
        default=0,
        help_text=(
            "Higher priority deals are selected first "
            "when multiple deals apply to a product."
        ),
    )

    is_active = models.BooleanField(
        default=True,
        db_index=True,
    )

    products = models.ManyToManyField(
        Product,
        through="DealProduct",
        related_name="deals",
        blank=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        db_table = "deals"

        ordering = [
            "-priority",
            "-created_at",
        ]

        indexes = [
            models.Index(
                fields=[
                    "is_active",
                    "starts_at",
                    "ends_at",
                ],
                name="deal_active_dates_idx",
            ),
        ]

    def clean(self):
        """
        Validate Deal business rules.
        """

        errors = {}

        # Validate dates only when both values exist.
        if self.starts_at and self.ends_at:
            if self.ends_at <= self.starts_at:
                errors["ends_at"] = (
                    "End time must be after start time."
                )

        # Validate discount.
        if self.discount_value is not None:

            if self.discount_value <= 0:
                errors["discount_value"] = (
                    "Discount value must be greater than zero."
                )

            elif (
                self.discount_type == self.DiscountType.PERCENTAGE
                and self.discount_value > 100
            ):
                errors["discount_value"] = (
                    "Percentage discount cannot exceed 100%."
                )

        # Validate usage.
        if (
            self.max_uses is not None
            and self.used_count > self.max_uses
        ):
            errors["used_count"] = (
                "Used count cannot exceed maximum uses."
            )

        if errors:
            raise ValidationError(errors)

    def save(self, *args, **kwargs):
        """
        Generate slug and validate the model before saving.
        """

        if not self.slug and self.name:
            self.slug = slugify(self.name)

        self.full_clean()

        super().save(*args, **kwargs)

    @property
    def is_currently_active(self):
        """
        Return True when the deal is currently active
        and available for use.
        """

        if not self.is_active:
            return False

        # Important for unsaved Django Admin instances.
        if not self.starts_at or not self.ends_at:
            return False

        now = timezone.now()

        if now < self.starts_at:
            return False

        if now >= self.ends_at:
            return False

        if (
            self.max_uses is not None
            and self.used_count >= self.max_uses
        ):
            return False

        return True

    @property
    def is_upcoming(self):
        """
        Return True when the deal starts in the future.
        """

        if not self.is_active:
            return False

        if not self.starts_at:
            return False

        return timezone.now() < self.starts_at

    @property
    def is_expired(self):
        """
        Return True when the deal has passed its end time.
        """

        if not self.ends_at:
            return False

        return timezone.now() >= self.ends_at

    @property
    def is_sold_out(self):
        """
        Return True when the deal has reached its usage limit.
        """

        if self.max_uses is None:
            return False

        return self.used_count >= self.max_uses

    @property
    def remaining_uses(self):
        """
        Return remaining usage count.

        Returns None when the deal has unlimited usage.
        """

        if self.max_uses is None:
            return None

        return max(
            self.max_uses - self.used_count,
            0,
        )

    @property
    def status(self):
        """
        Return the current lifecycle status of the deal.
        """

        if not self.is_active:
            return "inactive"

        if not self.starts_at:
            return "inactive"

        if self.is_upcoming:
            return "upcoming"

        if self.is_expired:
            return "expired"

        if self.is_sold_out:
            return "sold_out"

        return "active"

    def __str__(self):
        return self.name


class DealProduct(models.Model):

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    deal = models.ForeignKey(
        Deal,
        on_delete=models.CASCADE,
        related_name="deal_products",
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="deal_products",
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    class Meta:
        db_table = "deal_products"

        ordering = [
            "-created_at",
        ]

        constraints = [
            models.UniqueConstraint(
                fields=[
                    "deal",
                    "product",
                ],
                name="unique_deal_product",
            ),
        ]

        indexes = [
            models.Index(
                fields=[
                    "deal",
                    "product",
                ],
                name="deal_product_idx",
            ),
            models.Index(
                fields=[
                    "product",
                ],
                name="deal_product_product_idx",
            ),
        ]

    def __str__(self):
        return f"{self.deal.name} - {self.product.name}"