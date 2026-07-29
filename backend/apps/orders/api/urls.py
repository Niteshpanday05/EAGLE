from django.urls import path

from apps.orders.api.views.order_detail import (
    OrderDetailView,
)
from apps.orders.api.views.order_list import (
    OrderListView,
)
from apps.orders.api.views.place_order import (
    PlaceOrderView,
)

urlpatterns = [
    path(
        "",
        OrderListView.as_view(),
        name="order-list",
    ),
    path(
        "place/",
        PlaceOrderView.as_view(),
        name="place-order",
    ),
    path(
        "<str:order_number>/",
        OrderDetailView.as_view(),
        name="order-detail",
    ),
]