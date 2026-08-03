from rest_framework import serializers

from apps.orders.models import Order


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
    


class DashboardOrderSerializer(serializers.ModelSerializer):

    customer = serializers.CharField(
        source="user.email",
        read_only=True
    )


    class Meta:
        model = Order
        fields = [
            "id",
            "order_number",
            "customer",
            "status",
            "payment_status",
            "total_amount",
            "created_at",
        ]



class OrderStatusUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = [
            "status",
        ]
