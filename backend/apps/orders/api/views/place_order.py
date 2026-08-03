from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.orders.api.serializers import (
    OrderSerializer,
    PlaceOrderSerializer,
)

from apps.orders.services import OrderService

from apps.payments.services.payment_service import (
    PaymentService,
)


class PlaceOrderView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def post(self, request):

        serializer = PlaceOrderSerializer(
            data=request.data,
        )

        serializer.is_valid(
            raise_exception=True
        )

        order = OrderService.place_order(

            user=request.user,

            address_id=serializer.validated_data[
                "address_id"
            ],

            payment_method=serializer.validated_data[
                "payment_method"
            ],

            notes=serializer.validated_data.get(
                "notes",
                "",
            ),
        )

        # ===========================
        # Create Payment
        # ===========================

        payment = order.payment

        payment_response = PaymentService.initiate_payment(
            payment
        )

        order_data = OrderSerializer(
            order
        ).data

        response = {
            **order_data,
            "payment": payment_response,
        }

        return Response(
            response,
            status=status.HTTP_201_CREATED
        )