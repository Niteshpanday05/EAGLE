from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAdminUser

from .models import Deal
from .selectors import (
    get_active_deals,
    get_deal_by_slug,
    get_ending_soon_deals,
)
from .serializers import (
    DealCreateSerializer,
    DealSerializer,
    DealUpdateSerializer,
)


class DealListView(generics.ListAPIView):
    """
    Public endpoint for active deals.
    """

    permission_classes = [
        AllowAny,
    ]

    serializer_class = DealSerializer

    def get_queryset(self):
        return get_active_deals()


class DealDetailView(generics.RetrieveAPIView):
    """
    Public endpoint for a single deal.
    """

    permission_classes = [
        AllowAny,
    ]

    serializer_class = DealSerializer

    lookup_field = "slug"

    def get_queryset(self):
        return Deal.objects.prefetch_related(
            "deal_products__product"
        )


class FlashDealListView(generics.ListAPIView):
    """
    Public endpoint for flash deals.

    Currently uses priority to determine
    the most important active deals.
    """

    permission_classes = [
        AllowAny,
    ]

    serializer_class = DealSerializer

    def get_queryset(self):
        return get_active_deals().filter(
            priority__gt=0
        )


class EndingSoonDealListView(generics.ListAPIView):
    """
    Public endpoint for deals ending soon.
    """

    permission_classes = [
        AllowAny,
    ]

    serializer_class = DealSerializer

    def get_queryset(self):
        return get_ending_soon_deals(
            hours=24
        )


class AdminDealListCreateView(
    generics.ListCreateAPIView
):
    """
    Admin endpoint for listing and creating deals.
    """

    permission_classes = [
        IsAdminUser,
    ]

    def get_queryset(self):
        return (
            Deal.objects
            .prefetch_related(
                "deal_products__product"
            )
            .order_by(
                "-created_at"
            )
        )

    def get_serializer_class(self):
        if self.request.method == "POST":
            return DealCreateSerializer

        return DealSerializer


class AdminDealDetailView(
    generics.RetrieveUpdateDestroyAPIView
):
    """
    Admin endpoint for retrieving,
    updating, and deleting a deal.
    """

    permission_classes = [
        IsAdminUser,
    ]

    lookup_field = "pk"

    def get_queryset(self):
        return Deal.objects.prefetch_related(
            "deal_products__product"
        )

    def get_serializer_class(self):
        if self.request.method in [
            "PUT",
            "PATCH",
        ]:
            return DealUpdateSerializer

        return DealSerializer