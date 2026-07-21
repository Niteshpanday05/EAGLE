from decimal import Decimal

from django.conf import settings
from django.db import models


class Cart(models.Model):
    """
    Shopping cart for an authenticated user.
    Each user owns exactly one cart.
    """

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="cart",
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        db_table = "carts"
        ordering = ["-updated_at"]
        verbose_name = "Cart"
        verbose_name_plural = "Carts"

    def __str__(self):
        return f"{self.user.email}'s Cart"

    @property
    def total_items(self):
        return self.items.count()

    @property
    def total_quantity(self):
        return sum(item.quantity for item in self.items.all())

    @property
    def subtotal(self):
        return sum(
            (item.subtotal for item in self.items.all()),
            Decimal("0.00"),
        )

    @property
    def shipping(self):
        if self.subtotal >= Decimal("1000.00"):
            return Decimal("0.00")
        return Decimal("100.00")

    @property
    def tax(self):
        return self.subtotal * Decimal("0.13")

    @property
    def total(self):
        return self.subtotal + self.shipping + self.tax