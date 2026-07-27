from django.urls import path

from apps.checkout.api.views import CheckoutView, PlaceOrderView

urlpatterns = [
    path("", CheckoutView.as_view(), name="checkout"),
    path("place-order/", PlaceOrderView.as_view(), name="place-order"),
]