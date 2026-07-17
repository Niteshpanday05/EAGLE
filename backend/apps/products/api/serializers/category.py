from rest_framework import serializers

from apps.products.models import Category


class CategorySerializer(serializers.ModelSerializer):

    product_count = serializers.IntegerField(
        read_only=True
    )

    class Meta:
        model = Category

        fields = (
            "id",
            "name",
            "slug",
            "image",
            "product_count",
        )