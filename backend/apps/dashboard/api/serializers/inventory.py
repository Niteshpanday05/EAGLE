from rest_framework import serializers



class InventorySummarySerializer(serializers.Serializer):

    total_products = serializers.IntegerField()

    total_stock = serializers.IntegerField()

    out_of_stock = serializers.IntegerField()

    low_stock = serializers.IntegerField()

    inventory_value = serializers.DecimalField(
        max_digits=12,
        decimal_places=2,
    )



class LowStockProductSerializer(serializers.Serializer):

    id = serializers.CharField()

    name = serializers.CharField()

    stock = serializers.IntegerField()

    price = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
    )



class OutOfStockProductSerializer(serializers.Serializer):

    id = serializers.CharField()

    name = serializers.CharField()

    brand = serializers.CharField()



class HighestStockProductSerializer(serializers.Serializer):

    id = serializers.CharField()

    name = serializers.CharField()

    stock = serializers.IntegerField()



class DashboardInventorySerializer(serializers.Serializer):

    summary = InventorySummarySerializer()

    low_stock_products = LowStockProductSerializer(
        many=True
    )

    out_of_stock_products = OutOfStockProductSerializer(
        many=True
    )

    highest_stock_products = HighestStockProductSerializer(
        many=True
    )