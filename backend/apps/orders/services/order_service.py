import uuid

from django.db import transaction
from django.db.models import F
from rest_framework.exceptions import ValidationError

from apps.cart.models import Cart
from apps.orders.models import (
    Order,
    OrderItem,
    ShippingAddress,
)
from apps.products.models import Product


class OrderService:

    @staticmethod
    def generate_order_number():
        return f"ORD-{uuid.uuid4().hex[:10].upper()}"

    @classmethod
    @transaction.atomic
    def create_order(cls, user, validated_data):

        try:
            cart = (
                Cart.objects
                .prefetch_related("items__product")
                .get(user=user)
            )

        except Cart.DoesNotExist:
            raise ValidationError("Cart not found.")

        if not cart.items.exists():
            raise ValidationError("Your cart is empty.")

        # Lock products during checkout
        product_ids = [
            item.product_id
            for item in cart.items.all()
        ]

        products = {
            product.id: product
            for product in Product.objects.select_for_update().filter(
                id__in=product_ids
            )
        }

        # Validate stock
        for item in cart.items.all():

            product = products[item.product_id]

            if not product.is_active:
                raise ValidationError(
                    f"{product.name} is unavailable."
                )

            if product.stock < item.quantity:
                raise ValidationError(
                    f"Only {product.stock} {product.name} left in stock."
                )

        order = Order.objects.create(
            user=user,
            order_number=cls.generate_order_number(),
            subtotal=cart.subtotal,
            shipping=cart.shipping,
            tax=cart.tax,
            total=cart.total,
            notes=validated_data.get("notes", ""),
        )

        ShippingAddress.objects.create(
            order=order,
            full_name=validated_data["full_name"],
            email=validated_data["email"],
            phone=validated_data["phone"],
            country=validated_data["country"],
            province=validated_data["province"],
            city=validated_data["city"],
            street_address=validated_data["street_address"],
            postal_code=validated_data.get(
                "postal_code",
                "",
            ),
        )

        order_items = []

        for item in cart.items.all():

            order_items.append(
                OrderItem(
                    order=order,
                    product=item.product,
                    quantity=item.quantity,
                    unit_price=item.unit_price,
                    subtotal=item.subtotal,
                )
            )

            Product.objects.filter(
                id=item.product_id
            ).update(
                stock=F("stock") - item.quantity
            )

        OrderItem.objects.bulk_create(order_items)

        cart.items.all().delete()

        return order