from django.db import models

from .order import Order


class ShippingAddress(models.Model):
    order = models.OneToOneField(
        Order,
        on_delete=models.CASCADE,
        related_name="shipping_address",
    )

    full_name = models.CharField(max_length=255)

    phone_number = models.CharField(max_length=20)

    country = models.CharField(max_length=100)

    state = models.CharField(max_length=100)

    city = models.CharField(max_length=100)

    postal_code = models.CharField(
        max_length=20,
        blank=True,
    )

    address_line_1 = models.CharField(max_length=255)

    address_line_2 = models.CharField(
        max_length=255,
        blank=True,
    )

    landmark = models.CharField(
        max_length=255,
        blank=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Shipping Address"
        verbose_name_plural = "Shipping Addresses"

    def __str__(self):
        return f"{self.order.order_number} - {self.full_name}"