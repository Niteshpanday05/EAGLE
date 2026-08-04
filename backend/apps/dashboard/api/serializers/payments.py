from rest_framework import serializers



class PaymentSummarySerializer(serializers.Serializer):

    total_payments = serializers.IntegerField()
    processing_payments = serializers.IntegerField()
    cancelled_payments = serializers.IntegerField()

    successful_payments = serializers.IntegerField()

    pending_payments = serializers.IntegerField()

    failed_payments = serializers.IntegerField()

    refunded_payments = serializers.IntegerField()

    total_revenue = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
    )



class PaymentMethodSerializer(serializers.Serializer):

    payment_method = serializers.CharField()

    total = serializers.IntegerField()

    revenue = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
    )



class RecentPaymentSerializer(serializers.Serializer):

    reference = serializers.CharField()

    order_number = serializers.CharField()

    method = serializers.CharField()

    status = serializers.CharField()

    amount = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
    )

    currency = serializers.CharField()

    created_at = serializers.DateTimeField()



class DashboardPaymentsSerializer(serializers.Serializer):

    summary = PaymentSummarySerializer()

    payment_methods = PaymentMethodSerializer(
        many=True
    )

    recent_payments = RecentPaymentSerializer(
        many=True
    )