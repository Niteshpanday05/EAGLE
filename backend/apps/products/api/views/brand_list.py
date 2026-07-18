from rest_framework.generics import ListAPIView
from apps.products.models import Brand
from apps.products.api.serializers.brand import BrandSerializer

class BrandListView(ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer