from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.orders.api.serializers import OrderSerializer
from apps.orders.selectors import OrderSelector


class OrderDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(
        self,
        request,
        order_number,
    ):

        order = OrderSelector.get_order(
            request.user,
            order_number,
        )

        serializer = OrderSerializer(order)

        return Response(serializer.data)