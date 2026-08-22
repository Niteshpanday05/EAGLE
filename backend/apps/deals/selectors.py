from django.db import models
from django.utils import timezone

from .models import Deal


def get_active_deals():
    """
    Return deals that are currently active and available.
    """

    now = timezone.now()

    return (
        Deal.objects.filter(
            is_active=True,
            starts_at__lte=now,
            ends_at__gt=now,
        )
        .filter(
            models.Q(max_uses__isnull=True)
            | models.Q(used_count__lt=models.F("max_uses"))
        )
        .prefetch_related(
            "deal_products__product"
        )
        .order_by(
            "-priority",
            "-created_at",
        )
    )


def get_deal_by_slug(slug):
    """
    Return a deal by slug with its products.
    """

    return (
        Deal.objects
        .prefetch_related(
            "deal_products__product"
        )
        .filter(
            slug=slug,
        )
        .first()
    )


def get_active_deal_for_product(product):
    """
    Return the highest-priority active deal
    applicable to a product.
    """

    now = timezone.now()

    return (
        Deal.objects
        .filter(
            products=product,
            is_active=True,
            starts_at__lte=now,
            ends_at__gt=now,
        )
        .filter(
            models.Q(max_uses__isnull=True)
            | models.Q(used_count__lt=models.F("max_uses"))
        )
        .order_by(
            "-priority",
            "-created_at",
        )
        .first()
    )


def get_ending_soon_deals(hours=24):
    """
    Return active deals ending within the given number of hours.
    """

    now = timezone.now()

    end_time = now + timezone.timedelta(
        hours=hours
    )

    return (
        Deal.objects
        .filter(
            is_active=True,
            starts_at__lte=now,
            ends_at__gt=now,
            ends_at__lte=end_time,
        )
        .filter(
            models.Q(max_uses__isnull=True)
            | models.Q(used_count__lt=models.F("max_uses"))
        )
        .prefetch_related(
            "deal_products__product"
        )
        .order_by(
            "ends_at",
        )
    )