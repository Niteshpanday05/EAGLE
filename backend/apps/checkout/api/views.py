from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.checkout.api.serializers import CheckoutSerializer
from apps.checkout.services.checkout_service import CheckoutService


class CheckoutView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):

        checkout = CheckoutService.get_checkout(
            request.user,
        )

        serializer = CheckoutSerializer(checkout)

        return Response(serializer.data)


class PlaceOrderView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        return Response(
            {
                "message": "Coming next..."
            }
        )