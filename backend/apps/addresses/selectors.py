from django.shortcuts import get_object_or_404

from apps.addresses.models import Address


def get_addresses(user):
    return Address.objects.filter(
        user=user,
        is_active=True,
    ).order_by("-is_default", "-updated_at")


def get_address(user, address_id):
    return get_object_or_404(
        Address,
        id=address_id,
        user=user,
        is_active=True,
    )


def get_default_address(user):
    return (
        Address.objects.filter(
            user=user,
            is_default=True,
            is_active=True,
        )
        .first()
    )