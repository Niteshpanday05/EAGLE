from django.utils import timezone
from rest_framework import serializers

from apps.products.models import Product

from .models import Deal, DealProduct


class DealProductSerializer(serializers.ModelSerializer):
    """
    Serializer for products attached to a deal.
    """

    product_id = serializers.UUIDField(
        source="product.id",
        read_only=True,
    )

    product_name = serializers.CharField(
        source="product.name",
        read_only=True,
    )

    product_slug = serializers.CharField(
        source="product.slug",
        read_only=True,
    )

    class Meta:
        model = DealProduct

        fields = [
            "product_id",
            "product_name",
            "product_slug",
        ]


class DealSerializer(serializers.ModelSerializer):
    """
    Public serializer used by the frontend.
    """

    status = serializers.SerializerMethodField()

    discount_percentage = serializers.SerializerMethodField()

    remaining_uses = serializers.ReadOnlyField()

    products = serializers.SerializerMethodField()

    class Meta:
        model = Deal

        fields = [
            "id",
            "name",
            "slug",
            "description",
            "discount_type",
            "discount_value",
            "discount_percentage",
            "starts_at",
            "ends_at",
            "status",
            "remaining_uses",
            "products",
            "priority",
        ]

    def get_status(self, obj):
        now = timezone.now()

        if not obj.is_active:
            return "inactive"

        if now < obj.starts_at:
            return "upcoming"

        if now >= obj.ends_at:
            return "expired"

        if (
            obj.max_uses is not None
            and obj.used_count >= obj.max_uses
        ):
            return "sold_out"

        return "active"

    def get_discount_percentage(self, obj):
        if obj.discount_type == Deal.DiscountType.PERCENTAGE:
            return obj.discount_value

        return None

    def get_products(self, obj):
        return [
            {
                "id": str(deal_product.product.id),
                "name": deal_product.product.name,
                "slug": deal_product.product.slug,
                "price": deal_product.product.price,
                "discount_price": deal_product.product.discount_price,
                "thumbnail": (
                    deal_product.product.thumbnail.url
                    if deal_product.product.thumbnail
                    else None
                ),
            }
            for deal_product in obj.deal_products.all()
            if deal_product.product.is_active
        ]


class DealCreateSerializer(serializers.ModelSerializer):
    """
    Serializer used by admin endpoints to create Deals.
    """

    product_ids = serializers.ListField(
        child=serializers.UUIDField(),
        write_only=True,
        allow_empty=False,
    )

    class Meta:
        model = Deal

        fields = [
            "name",
            "slug",
            "description",
            "discount_type",
            "discount_value",
            "starts_at",
            "ends_at",
            "max_uses",
            "priority",
            "is_active",
            "product_ids",
        ]

    def validate(self, attrs):
        starts_at = attrs.get("starts_at")
        ends_at = attrs.get("ends_at")

        if starts_at and ends_at and ends_at <= starts_at:
            raise serializers.ValidationError({
                "ends_at": (
                    "End time must be after start time."
                )
            })

        discount_type = attrs.get("discount_type")
        discount_value = attrs.get("discount_value")

        if (
            discount_type == Deal.DiscountType.PERCENTAGE
            and discount_value is not None
            and discount_value > 100
        ):
            raise serializers.ValidationError({
                "discount_value": (
                    "Percentage discount cannot exceed 100%."
                )
            })

        if (
            discount_value is not None
            and discount_value <= 0
        ):
            raise serializers.ValidationError({
                "discount_value": (
                    "Discount value must be greater than zero."
                )
            })

        max_uses = attrs.get("max_uses")

        if max_uses is not None and max_uses <= 0:
            raise serializers.ValidationError({
                "max_uses": (
                    "Maximum uses must be greater than zero."
                )
            })

        return attrs

    def validate_product_ids(self, value):
        products = Product.objects.filter(
            id__in=value,
            is_active=True,
        )

        existing_ids = {
            product.id
            for product in products
        }

        missing_ids = [
            product_id
            for product_id in value
            if product_id not in existing_ids
        ]

        if missing_ids:
            raise serializers.ValidationError(
                "One or more products do not exist or are inactive."
            )

        return value

    def create(self, validated_data):
        product_ids = validated_data.pop("product_ids")

        deal = Deal.objects.create(
            **validated_data
        )

        products = Product.objects.filter(
            id__in=product_ids,
            is_active=True,
        )

        DealProduct.objects.bulk_create(
            [
                DealProduct(
                    deal=deal,
                    product=product,
                )
                for product in products
            ]
        )

        return deal


class DealUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer used by admin endpoints to update Deals.
    """

    product_ids = serializers.ListField(
        child=serializers.UUIDField(),
        write_only=True,
        required=False,
        allow_empty=False,
    )

    class Meta:
        model = Deal

        fields = [
            "name",
            "slug",
            "description",
            "discount_type",
            "discount_value",
            "starts_at",
            "ends_at",
            "max_uses",
            "priority",
            "is_active",
            "product_ids",
        ]

    def validate(self, attrs):
        instance = self.instance

        starts_at = attrs.get(
            "starts_at",
            instance.starts_at,
        )

        ends_at = attrs.get(
            "ends_at",
            instance.ends_at,
        )

        if ends_at <= starts_at:
            raise serializers.ValidationError({
                "ends_at": (
                    "End time must be after start time."
                )
            })

        discount_type = attrs.get(
            "discount_type",
            instance.discount_type,
        )

        discount_value = attrs.get(
            "discount_value",
            instance.discount_value,
        )

        if discount_value <= 0:
            raise serializers.ValidationError({
                "discount_value": (
                    "Discount value must be greater than zero."
                )
            })

        if (
            discount_type == Deal.DiscountType.PERCENTAGE
            and discount_value > 100
        ):
            raise serializers.ValidationError({
                "discount_value": (
                    "Percentage discount cannot exceed 100%."
                )
            })

        max_uses = attrs.get(
            "max_uses",
            instance.max_uses,
        )

        if max_uses is not None and max_uses <= 0:
            raise serializers.ValidationError({
                "max_uses": (
                    "Maximum uses must be greater than zero."
                )
            })

        if (
            max_uses is not None
            and instance.used_count > max_uses
        ):
            raise serializers.ValidationError({
                "max_uses": (
                    "Maximum uses cannot be lower "
                    "than the number of uses already recorded."
                )
            })

        return attrs

    def validate_product_ids(self, value):
        products = Product.objects.filter(
            id__in=value,
            is_active=True,
        )

        existing_ids = {
            product.id
            for product in products
        }

        missing_ids = [
            product_id
            for product_id in value
            if product_id not in existing_ids
        ]

        if missing_ids:
            raise serializers.ValidationError(
                "One or more products do not exist or are inactive."
            )

        return value

    def update(self, instance, validated_data):
        product_ids = validated_data.pop(
            "product_ids",
            None,
        )

        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        instance.save()

        if product_ids is not None:
            products = Product.objects.filter(
                id__in=product_ids,
                is_active=True,
            )

            DealProduct.objects.filter(
                deal=instance,
            ).delete()

            DealProduct.objects.bulk_create(
                [
                    DealProduct(
                        deal=instance,
                        product=product,
                    )
                    for product in products
                ]
            )

        return instance