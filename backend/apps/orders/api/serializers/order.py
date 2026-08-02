from rest_framework import serializers

from apps.orders.models import (
    Order,
    OrderItem,
    ShippingAddress,
)

from apps.payments.models import Payment



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



# IMPORTANT:
# This must be ABOVE OrderSerializer

class OrderPaymentSerializer(serializers.ModelSerializer):

    class Meta:

        model = Payment

        fields = (
            "reference",
            "payment_method",
            "status",
            "amount",
            "currency",
            "transaction_id",
            "paid_at",
        )



class OrderSerializer(serializers.ModelSerializer):

    items = OrderItemSerializer(
        many=True,
        read_only=True,
    )


    shipping_address = ShippingAddressSerializer(
        read_only=True,
    )


    payment = OrderPaymentSerializer(
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

            "payment",

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