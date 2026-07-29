from rest_framework import serializers

from apps.orders.models import (
    Order,
    OrderItem,
    ShippingAddress,
)


class ShippingAddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShippingAddress
        fields = (
            "full_name",
            "email",
            "phone",
            "country",
            "province",
            "city",
            "street_address",
            "postal_code",
        )


class OrderItemSerializer(serializers.ModelSerializer):

    product_name = serializers.CharField(
        source="product.name",
        read_only=True,
    )

    thumbnail = serializers.ImageField(
        source="product.thumbnail",
        read_only=True,
    )

    class Meta:
        model = OrderItem
        fields = (
            "id",
            "product",
            "product_name",
            "thumbnail",
            "quantity",
            "unit_price",
            "subtotal",
        )


class OrderSerializer(serializers.ModelSerializer):

    items = OrderItemSerializer(
        many=True,
        read_only=True,
    )

    shipping_address = ShippingAddressSerializer(
        read_only=True,
    )

    class Meta:
        model = Order
        fields = (
            "id",
            "order_number",
            "status",
            "payment_method",
            "payment_status",
            "subtotal",
            "shipping",
            "tax",
            "discount",
            "total",
            "notes",
            "items",
            "shipping_address",
            "created_at",
        )