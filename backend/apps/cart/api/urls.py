from django.urls import path

from .views import (
    AddToCartAPIView,
    CartAPIView,
    ClearCartAPIView,
    RemoveCartItemAPIView,
    UpdateCartItemAPIView,
)

urlpatterns = [
    path(
        "",
        CartAPIView.as_view(),
        name="cart",
    ),

    path(
        "add/",
        AddToCartAPIView.as_view(),
        name="cart-add",
    ),

    path(
        "items/<int:item_id>/",
        UpdateCartItemAPIView.as_view(),
        name="cart-update",
    ),

    path(
        "items/<int:item_id>/delete/",
        RemoveCartItemAPIView.as_view(),
        name="cart-remove",
    ),

    path(
        "clear/",
        ClearCartAPIView.as_view(),
        name="cart-clear",
    ),
]