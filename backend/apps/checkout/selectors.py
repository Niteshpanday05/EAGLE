from django.db.models import Prefetch

from apps.cart.models import Cart, CartItem


def get_cart(user):
    return (
        Cart.objects.select_related("user")
        .prefetch_related(
            Prefetch(
                "items",
                queryset=CartItem.objects.select_related("product"),
            )
        )
        .get(user=user)
    )