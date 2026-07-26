from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.orders.api.serializers.order import OrderSerializer
from apps.orders.api.serializers.shipping import (
    ShippingAddressSerializer,
)
from apps.orders.services.order_service import OrderService


class CheckoutAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = ShippingAddressSerializer(
            data=request.data
        )

        serializer.is_valid(raise_exception=True)

        order = OrderService.create_order(
            request.user,
            serializer.validated_data,
        )

        return Response(
            OrderSerializer(order).data,
            status=status.HTTP_201_CREATED,
        )