from rest_framework import serializers


class OrderStatusSummarySerializer(serializers.Serializer):
    status = serializers.CharField()
    total = serializers.IntegerField()


class RecentOrderSerializer(serializers.Serializer):
    order_number = serializers.CharField()
    customer = serializers.CharField()
    status = serializers.CharField()
    total = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
    )
    created_at = serializers.DateTimeField()


class DashboardOrdersSerializer(serializers.Serializer):
    status_summary = OrderStatusSummarySerializer(
        many=True
    )

    recent_orders = RecentOrderSerializer(
        many=True
    )