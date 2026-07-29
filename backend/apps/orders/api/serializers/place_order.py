from rest_framework import serializers

from apps.orders.choices import PaymentMethod


class PlaceOrderSerializer(serializers.Serializer):
    address_id = serializers.IntegerField()

    payment_method = serializers.ChoiceField(
        choices=PaymentMethod.choices,
    )

    notes = serializers.CharField(
        required=False,
        allow_blank=True,
    )