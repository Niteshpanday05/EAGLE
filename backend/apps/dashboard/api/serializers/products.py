from rest_framework import serializers



class ProductSummarySerializer(serializers.Serializer):

    total_products = serializers.IntegerField()

    active_products = serializers.IntegerField()

    inactive_products = serializers.IntegerField()

    out_of_stock = serializers.IntegerField()

    low_stock = serializers.IntegerField()

    average_rating = serializers.DecimalField(
        max_digits=3,
        decimal_places=2,
    )



class TopProductSerializer(serializers.Serializer):

    product__id = serializers.UUIDField()

    product__name = serializers.CharField()

    total_sold = serializers.IntegerField()



class RecentProductSerializer(serializers.Serializer):

    id = serializers.CharField()

    name = serializers.CharField()

    brand = serializers.CharField()

    price = serializers.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    stock = serializers.IntegerField()

    rating = serializers.DecimalField(
        max_digits=3,
        decimal_places=2,
    )

    created_at = serializers.DateTimeField()



class DashboardProductsSerializer(serializers.Serializer):

    summary = ProductSummarySerializer()

    top_products = TopProductSerializer(
        many=True
    )

    recent_products = RecentProductSerializer(
        many=True
    )