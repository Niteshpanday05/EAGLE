from rest_framework import serializers

from apps.addresses.models import Address


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = (
            "id",
            "full_name",
            "phone_number",
            "country",
            "state",
            "city",
            "postal_code",
            "address_line_1",
            "address_line_2",
            "landmark",
            "is_default",
            "created_at",
            "updated_at",
        )
        read_only_fields = (
            "id",
            "is_default",
            "created_at",
            "updated_at",
        )


class AddressCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        exclude = (
            "user",
            "is_default",
            "is_active",
            "created_at",
            "updated_at",
        )