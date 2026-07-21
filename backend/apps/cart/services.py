from django.db import transaction
from django.shortcuts import get_object_or_404

from apps.products.models import Product

from .models import Cart, CartItem


class CartService:
    """
    Business logic for shopping cart.
    """

    @staticmethod
    def get_or_create_cart(user):
        cart, _ = Cart.objects.get_or_create(user=user)
        return cart

    @staticmethod
    @transaction.atomic
    def add_item(user, product_id, quantity=1):
        """
        Add product to cart.
        If it already exists, increase quantity.
        """

        if quantity <= 0:
            raise ValueError("Quantity must be greater than zero.")

        product = get_object_or_404(
            Product,
            id=product_id,
            is_active=True,
        )

        if not product.is_in_stock:
            raise ValueError("Product is out of stock.")

        cart = CartService.get_or_create_cart(user)

        item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={
                "quantity": quantity,
            },
        )

        if not created:
            item.quantity += quantity

        if item.quantity > product.stock:
            raise ValueError(
                f"Only {product.stock} item(s) available."
            )

        item.save()

        return cart

    @staticmethod
    @transaction.atomic
    def update_quantity(user, item_id, quantity):
        """
        Update cart item quantity.
        """

        if quantity <= 0:
            raise ValueError(
                "Quantity must be greater than zero."
            )

        cart = CartService.get_or_create_cart(user)

        item = get_object_or_404(
            CartItem,
            id=item_id,
            cart=cart,
        )

        if quantity > item.product.stock:
            raise ValueError(
                f"Only {item.product.stock} item(s) available."
            )

        item.quantity = quantity
        item.save(update_fields=["quantity"])

        return cart

    @staticmethod
    @transaction.atomic
    def remove_item(user, item_id):
        """
        Remove item from cart.
        """

        cart = CartService.get_or_create_cart(user)

        item = get_object_or_404(
            CartItem,
            id=item_id,
            cart=cart,
        )

        item.delete()

        return cart

    @staticmethod
    @transaction.atomic
    def clear_cart(user):
        """
        Remove all items from cart.
        """

        cart = CartService.get_or_create_cart(user)

        cart.items.all().delete()

        return cart