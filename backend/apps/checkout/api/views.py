from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.checkout.api.serializers import CheckoutSerializer
from apps.checkout.services.checkout_service import CheckoutService


class CheckoutView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        checkout = CheckoutService.get_checkout(request.user)

        cart = checkout["cart"]

        items = []

        for item in cart.items.all():
            items.append(
                {
                    "id": item.id,
                    "product_id": item.product.id,
                    "product_name": item.product.name,
                    "thumbnail": item.product.thumbnail.url if item.product.thumbnail else "",
                    "price": item.product.price,
                    "quantity": item.quantity,
                    "subtotal": item.product.price * item.quantity,
                }
            )

        serializer = CheckoutSerializer(
            {
                "items": items,
                "subtotal": checkout["subtotal"],
                "shipping": checkout["shipping"],
                "tax": checkout["tax"],
                "discount": checkout["discount"],
                "total": checkout["total"],
            }
        )

        return Response(serializer.data)

class PlaceOrderView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = PlaceOrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = CheckoutService.place_order(
            user=request.user,
            address_id=serializer.validated_data["address_id"],
            payment_method=serializer.validated_data["payment_method"],
        )

        return Response(data)