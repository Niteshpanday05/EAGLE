from rest_framework import serializers

from apps.categories.models import Category


class CategoryListSerializer(serializers.ModelSerializer):

    product_count = serializers.IntegerField(
        read_only=True,
    )

    class Meta:
        model = Category

        fields = (
            "id",
            "name",
            "slug",
            "description",
            "image",
            "product_count",
        )


class CategoryDetailSerializer(serializers.ModelSerializer):

    product_count = serializers.IntegerField(
        read_only=True,
    )

    class Meta:
        model = Category

        fields = (
            "id",
            "name",
            "slug",
            "description",
            "image",
            "product_count",
            "created_at",
            "updated_at",
        )