from django.shortcuts import get_object_or_404

from .models import Cart, CartItem


def get_cart(user):
    cart, _ = Cart.objects.get_or_create(user=user)
    return cart


def get_cart_items(user):
    cart = get_cart(user)

    return (
        CartItem.objects
        .filter(cart=cart)
        .select_related(
            "product",
            "product__category",
        )
    )


def get_cart_item(item_id):
    return get_object_or_404(
        CartItem.objects.select_related("product"),
        id=item_id,
    )