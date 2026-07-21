from decimal import Decimal

from django.core.validators import MinValueValidator
from django.db import models

from apps.products.models import Product

from .cart import Cart


class CartItem(models.Model):
    """
    Product stored inside a shopping cart.
    """

    cart = models.ForeignKey(
        Cart,
        on_delete=models.CASCADE,
        related_name="items",
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="cart_items",
    )

    quantity = models.PositiveIntegerField(
        default=1,
        validators=[MinValueValidator(1)],
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        db_table = "cart_items"
        ordering = ["-created_at"]
        unique_together = ("cart", "product")

    def __str__(self):
        return f"{self.product.name} × {self.quantity}"

    @property
    def unit_price(self):
        return self.product.final_price

    @property
    def subtotal(self):
        return Decimal(self.quantity) * self.product.final_price