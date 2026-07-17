from django.db.models import Count

from apps.products.models import Category


class CategorySelector:

    @staticmethod
    def list():

        return (
            Category.objects.filter(
                is_active=True
            )
            .annotate(
                product_count=Count("products")
            )
            .order_by("name")
        )