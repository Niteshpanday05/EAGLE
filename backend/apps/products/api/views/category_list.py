from rest_framework.generics import ListAPIView

from apps.products.api.serializers.category import (
    CategorySerializer,
)

from apps.products.services.category_service import (
    CategoryService,
)


class CategoryListView(ListAPIView):

    serializer_class = CategorySerializer

    permission_classes = []

    def get_queryset(self):
        return CategoryService.list()