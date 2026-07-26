from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from apps.orders.api.serializers.order import OrderSerializer
from apps.orders.selectors.order_selector import (
    OrderSelector,
)


class OrderListAPIView(ListAPIView):

    serializer_class = OrderSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return OrderSelector.get_user_orders(
            self.request.user
        )