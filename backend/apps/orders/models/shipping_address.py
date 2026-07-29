from django.db import models


class ShippingAddress(models.Model):
    order = models.OneToOneField(
        "orders.Order",
        on_delete=models.CASCADE,
        related_name="shipping_address",
    )

    full_name = models.CharField(max_length=255)

    email = models.EmailField()

    phone = models.CharField(max_length=20)

    country = models.CharField(max_length=100)

    province = models.CharField(max_length=100)

    city = models.CharField(max_length=100)

    street_address = models.CharField(max_length=255)

    postal_code = models.CharField(
        max_length=20,
        blank=True,
    )

    def __str__(self):
        return self.full_name