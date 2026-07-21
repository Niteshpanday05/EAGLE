from rest_framework import serializers

from apps.cart.models import Cart, CartItem
from apps.products.models import Product


class CartProductSerializer(serializers.ModelSerializer):
    """
    Lightweight product information for cart items.
    """

    final_price = serializers.ReadOnlyField()
    discount_percentage = serializers.ReadOnlyField()
    is_in_stock = serializers.ReadOnlyField()

    class Meta:
        model = Product

        fields = (
            "id",
            "name",
            "slug",
            "thumbnail",
            "brand",
            "price",
            "discount_price",
            "final_price",
            "discount_percentage",
            "stock",
            "is_in_stock",
        )


class CartItemSerializer(serializers.ModelSerializer):
    """
    Cart item serializer.
    """

    product = CartProductSerializer(read_only=True)

    unit_price = serializers.ReadOnlyField()

    subtotal = serializers.ReadOnlyField()

    class Meta:
        model = CartItem

        fields = (
            "id",
            "product",
            "quantity",
            "unit_price",
            "subtotal",
        )


class CartSerializer(serializers.ModelSerializer):
    """
    Complete shopping cart serializer.
    """

    items = CartItemSerializer(
        many=True,
        read_only=True,
    )

    total_items = serializers.ReadOnlyField()

    total_quantity = serializers.ReadOnlyField()

    subtotal = serializers.ReadOnlyField()

    shipping = serializers.ReadOnlyField()

    tax = serializers.ReadOnlyField()

    total = serializers.ReadOnlyField()

    class Meta:
        model = Cart

        fields = (
            "id",
            "items",
            "total_items",
            "total_quantity",
            "subtotal",
            "shipping",
            "tax",
            "total",
        )


class AddToCartSerializer(serializers.Serializer):
    """
    Request serializer for adding items.
    """

    product_id = serializers.UUIDField()

    quantity = serializers.IntegerField(
        min_value=1,
        default=1,
    )


class UpdateCartItemSerializer(serializers.Serializer):
    """
    Request serializer for updating quantity.
    """

    quantity = serializers.IntegerField(
        min_value=1,
    )