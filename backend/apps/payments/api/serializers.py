from rest_framework import serializers

from apps.payments.models import Payment


class InitiatePaymentSerializer(serializers.Serializer):
    """
    Start a payment for an order.
    """

    reference = serializers.CharField(
        max_length=100
    )


class VerifyPaymentSerializer(serializers.Serializer):
    """
    Verify payment after gateway callback.
    """

    reference = serializers.CharField(max_length=100)

    pidx = serializers.CharField(
        required=False,
        allow_blank=True,
    )

    token = serializers.CharField(
        required=False,
        allow_blank=True,
    )

    transaction_id = serializers.CharField(
        required=False,
        allow_blank=True,
    )


class RefundPaymentSerializer(serializers.Serializer):
    """
    Refund payment.
    """

    reference = serializers.CharField(max_length=100)


class PaymentSerializer(serializers.ModelSerializer):
    """
    Payment detail.
    """

    order_number = serializers.CharField(
        source="order.order_number",
        read_only=True,
    )

    class Meta:
        model = Payment

        fields = (
            "reference",
            "order_number",
            "payment_method",
            "status",
            "amount",
            "currency",
            "transaction_id",
            "gateway",
            "paid_at",
            "created_at",
        )

        read_only_fields = fields