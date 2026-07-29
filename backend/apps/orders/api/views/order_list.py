from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.orders.api.serializers import OrderSerializer
from apps.orders.selectors import OrderSelector


class OrderListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):

        orders = OrderSelector.get_orders(
            request.user,
        )

        serializer = OrderSerializer(
            orders,
            many=True,
        )

        return Response(serializer.data)