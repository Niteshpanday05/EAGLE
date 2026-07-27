from django.db import transaction

from apps.addresses.models import Address
from apps.addresses.selectors import get_address


class AddressService:

    @classmethod
    @transaction.atomic
    def create_address(cls, user, validated_data):

        has_default = Address.objects.filter(
            user=user,
            is_default=True,
            is_active=True,
        ).exists()

        address = Address.objects.create(
            user=user,
            is_default=not has_default,
            **validated_data,
        )

        return address

    @classmethod
    @transaction.atomic
    def update_address(cls, user, address_id, validated_data):

        address = get_address(user, address_id)

        for field, value in validated_data.items():
            setattr(address, field, value)

        address.save()

        return address

    @classmethod
    @transaction.atomic
    def delete_address(cls, user, address_id):

        address = get_address(user, address_id)

        was_default = address.is_default

        address.is_active = False
        address.is_default = False
        address.save()

        if was_default:
            next_address = (
                Address.objects.filter(
                    user=user,
                    is_active=True,
                )
                .exclude(id=address.id)
                .order_by("-updated_at")
                .first()
            )

            if next_address:
                next_address.is_default = True
                next_address.save()

    @classmethod
    @transaction.atomic
    def set_default(cls, user, address_id):

        address = get_address(user, address_id)

        Address.objects.filter(
            user=user,
            is_default=True,
        ).update(is_default=False)

        address.is_default = True
        address.save()

        return address