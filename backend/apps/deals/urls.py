from django.urls import path

from .views import (
    AdminDealDetailView,
    AdminDealListCreateView,
    DealDetailView,
    DealListView,
    EndingSoonDealListView,
    FlashDealListView,
)


urlpatterns = [

    # Public
    path(
        "",
        DealListView.as_view(),
        name="deal-list",
    ),

    path(
        "flash/",
        FlashDealListView.as_view(),
        name="flash-deal-list",
    ),

    path(
        "ending-soon/",
        EndingSoonDealListView.as_view(),
        name="ending-soon-deal-list",
    ),

    path(
        "<slug:slug>/",
        DealDetailView.as_view(),
        name="deal-detail",
    ),

    # Admin
    path(
        "admin/",
        AdminDealListCreateView.as_view(),
        name="admin-deal-list-create",
    ),

    path(
        "admin/<uuid:pk>/",
        AdminDealDetailView.as_view(),
        name="admin-deal-detail",
    ),
]