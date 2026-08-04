from django.db import models


class NotificationType(models.TextChoices):

    INVENTORY = (
        "inventory",
        "Inventory"
    )

    ORDER = (
        "order",
        "Order"
    )

    PAYMENT = (
        "payment",
        "Payment"
    )