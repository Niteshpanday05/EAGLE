from rest_framework import serializers



class SalesReportSerializer(serializers.Serializer):

    total_revenue = serializers.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    total_transactions = serializers.IntegerField()



class OrderReportSerializer(serializers.Serializer):

    total_orders = serializers.IntegerField()

    completed_orders = serializers.IntegerField()

    cancelled_orders = serializers.IntegerField()



class CustomerReportSerializer(serializers.Serializer):

    total_customers = serializers.IntegerField()

    registered_this_year = serializers.IntegerField()



class RevenuePaymentSerializer(serializers.Serializer):

    payment_method = serializers.CharField()

    revenue = serializers.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    count = serializers.IntegerField()



class DashboardReportsSerializer(serializers.Serializer):

    sales = SalesReportSerializer()

    orders = OrderReportSerializer()

    customers = CustomerReportSerializer()

    revenue_by_payment = RevenuePaymentSerializer(
        many=True
    )