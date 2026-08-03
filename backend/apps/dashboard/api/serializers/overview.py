# apps/dashboard/api/serializers/overview.py

from rest_framework import serializers


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