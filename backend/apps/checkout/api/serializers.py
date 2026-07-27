from rest_framework import serializers

from apps.addresses.api.serializers import AddressSerializer


class CheckoutItemSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    product_id = serializers.IntegerField()
    product_name = serializers.CharField()
    thumbnail = serializers.CharField()
    price = serializers.DecimalField(max_digits=10, decimal_places=2)
    quantity = serializers.IntegerField()
    subtotal = serializers.DecimalField(max_digits=10, decimal_places=2)


class PaymentMethodSerializer(serializers.Serializer):
    code = serializers.CharField()
    name = serializers.CharField()


class CheckoutSerializer(serializers.Serializer):
    items = CheckoutItemSerializer(many=True)

    addresses = AddressSerializer(many=True)

    default_address = AddressSerializer(
        allow_null=True,
    )

    subtotal = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    shipping = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    tax = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    discount = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    total = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    payment_methods = PaymentMethodSerializer(
        many=True,
    )