from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from apps.orders.api.serializers.order import OrderSerializer
from apps.orders.selectors.order_selector import (
    OrderSelector,
)


class OrderDetailAPIView(RetrieveAPIView):

    serializer_class = OrderSerializer

    permission_classes = [IsAuthenticated]

    lookup_field = "id"

    def get_object(self):

        return OrderSelector.get_order(
            self.request.user,
            self.kwargs["id"],
        )