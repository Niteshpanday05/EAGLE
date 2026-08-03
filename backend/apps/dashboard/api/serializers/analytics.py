from rest_framework import serializers


class SummarySerializer(serializers.Serializer):

    total_revenue = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
    )

    total_orders = serializers.IntegerField()

    total_customers = serializers.IntegerField()

    average_order_value = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
    )


class DailySalesSerializer(serializers.Serializer):

    day = serializers.DateField()

    revenue = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
    )


class TopProductSerializer(serializers.Serializer):

    product__name = serializers.CharField()

    quantity = serializers.IntegerField()


class OrderStatusSerializer(serializers.Serializer):

    status = serializers.CharField()

    total = serializers.IntegerField()


class DashboardAnalyticsSerializer(serializers.Serializer):

    summary = SummarySerializer()

    daily_sales = DailySalesSerializer(
        many=True
    )

    top_products = TopProductSerializer(
        many=True
    )

    order_status = OrderStatusSerializer(
        many=True
    )