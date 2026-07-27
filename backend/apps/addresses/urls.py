from django.urls import path

from apps.addresses.api.views import (
    AddressListCreateView,
    AddressDetailView,
    SetDefaultAddressView,
)

urlpatterns = [
    path(
        "",
        AddressListCreateView.as_view(),
        name="address-list-create",
    ),
    path(
        "<int:pk>/",
        AddressDetailView.as_view(),
        name="address-detail",
    ),
    path(
        "<int:pk>/default/",
        SetDefaultAddressView.as_view(),
        name="set-default-address",
    ),
]