from django.db.models import Count, Q
from django.shortcuts import get_object_or_404

from .models import Category


class CategorySelector:

    @staticmethod
    def list_categories(search=None):

        queryset = (
            Category.objects.filter(
                is_active=True,
            )
            .annotate(
                product_count=Count(
                    "products",
                    filter=Q(products__is_active=True),
                    distinct=True,
                )
            )
            .order_by("name")
        )

        if search:
            queryset = queryset.filter(
                Q(name__icontains=search)
                | Q(description__icontains=search)
            )

        return queryset

    @staticmethod
    def get_category(slug):

        return get_object_or_404(
            Category.objects.annotate(
                product_count=Count(
                    "products",
                    filter=Q(products__is_active=True),
                    distinct=True,
                )
            ),
            slug=slug,
            is_active=True,
        )