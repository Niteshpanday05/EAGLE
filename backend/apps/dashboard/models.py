from django.db import models

# Create your models here.

from django.conf import settings
from django.db import models


class ActivityLog(models.Model):
    """
    Stores important system activities.
    """

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="activity_logs",
    )

    action = models.CharField(
        max_length=255,
    )

    model_name = models.CharField(
        max_length=100,
        blank=True,
    )

    object_id = models.CharField(
        max_length=100,
        blank=True,
    )

    description = models.TextField(
        blank=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )


    class Meta:

        db_table = "activity_logs"

        ordering = [
            "-created_at"
        ]


    def __str__(self):

        return self.action
    
    
class Notification(models.Model):
    """
    Stores dashboard notifications.
    """


    TYPE_CHOICES = (

        ("ORDER", "Order"),

        ("PAYMENT", "Payment"),

        ("PRODUCT", "Product"),

        ("CUSTOMER", "Customer"),

        ("SYSTEM", "System"),

    )


    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="notifications",
    )


    notification_type = models.CharField(
        max_length=20,
        choices=TYPE_CHOICES,
        default="SYSTEM",
    )


    title = models.CharField(
        max_length=255,
    )


    message = models.TextField()


    is_read = models.BooleanField(
        default=False,
    )


    created_at = models.DateTimeField(
        auto_now_add=True,
    )


    class Meta:

        db_table = "notifications"

        ordering = [
            "-created_at"
        ]


    def __str__(self):

        return self.title