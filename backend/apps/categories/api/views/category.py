from rest_framework import generics
from rest_framework.permissions import AllowAny

from apps.categories.api.serializers import (
    CategoryDetailSerializer,
    CategoryListSerializer,
)
from apps.categories.services import CategoryService


class CategoryListAPIView(generics.ListAPIView):
    serializer_class = CategoryListSerializer
    permission_classes = [AllowAny]

    search_fields = (
        "name",
        "description",
    )

    ordering_fields = (
        "name",
        "created_at",
    )

    ordering = ("name",)

    def get_queryset(self):
        search = self.request.query_params.get("search")

        return CategoryService.list_categories(
            search=search,
        )


class CategoryDetailAPIView(generics.RetrieveAPIView):
    serializer_class = CategoryDetailSerializer
    permission_classes = [AllowAny]
    lookup_field = "slug"

    def get_queryset(self):
        return CategoryService.list_categories()