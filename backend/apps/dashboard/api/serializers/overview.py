from rest_framework import serializers


class DailyRevenueSerializer(serializers.Serializer):

    day = serializers.CharField()

    revenue = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
    )


class OrderStatusSerializer(serializers.Serializer):

    status = serializers.CharField()

    total = serializers.IntegerField()



class DashboardOverviewSerializer(serializers.Serializer):

    total_products = serializers.IntegerField()

    total_customers = serializers.IntegerField()

    total_orders = serializers.IntegerField()

    pending_orders = serializers.IntegerField()

    completed_orders = serializers.IntegerField()

    total_revenue = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
    )


    daily_revenue = DailyRevenueSerializer(
        many=True
    )


    order_status = OrderStatusSerializer(
        many=True
    )