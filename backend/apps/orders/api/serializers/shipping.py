from rest_framework import serializers


class ShippingAddressSerializer(serializers.Serializer):

    full_name = serializers.CharField(max_length=255)

    email = serializers.EmailField()

    phone = serializers.CharField(max_length=30)

    country = serializers.CharField(max_length=100)

    province = serializers.CharField(max_length=100)

    city = serializers.CharField(max_length=100)

    street_address = serializers.CharField(max_length=255)

    postal_code = serializers.CharField(
        max_length=20,
        required=False,
        allow_blank=True,
    )

    notes = serializers.CharField(
        required=False,
        allow_blank=True,
    )