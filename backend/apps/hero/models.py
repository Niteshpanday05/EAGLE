from django.db import models

# Create your models here.
from django.db import models


class Hero(models.Model):
    badge = models.CharField(
        max_length=100,
        blank=True
    )

    title = models.CharField(
        max_length=255
    )

    subtitle = models.CharField(
        max_length=255,
        blank=True
    )

    description = models.TextField()

    image = models.ImageField(
        upload_to="hero/"
    )

    primary_button_text = models.CharField(
        max_length=100
    )

    primary_button_url = models.CharField(
        max_length=255
    )

    secondary_button_text = models.CharField(
        max_length=100,
        blank=True
    )

    secondary_button_url = models.CharField(
        max_length=255,
        blank=True
    )

    is_active = models.BooleanField(
        default=True
    )

    display_order = models.PositiveIntegerField(
        default=1
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        ordering = ["display_order"]
        verbose_name = "Hero"
        verbose_name_plural = "Heroes"

    def __str__(self):
        return self.title