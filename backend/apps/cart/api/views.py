from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.cart.api.serializers import (
    AddToCartSerializer,
    CartSerializer,
    UpdateCartItemSerializer,
)
from apps.cart.selectors import get_cart
from apps.cart.services import CartService


class CartAPIView(APIView):
    """
    GET /api/v1/cart/
    """

    permission_classes = [AllowAny]

    def get(self, request):
        cart = get_cart(request.user)

        serializer = CartSerializer(cart)

        return Response(serializer.data)


class AddToCartAPIView(APIView):
    """
    POST /api/v1/cart/add/
    """

    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = AddToCartSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        CartService.add_item(
            user=request.user,
            product_id=serializer.validated_data["product_id"],
            quantity=serializer.validated_data["quantity"],
        )

        cart = get_cart(request.user)

        return Response(
            CartSerializer(cart).data,
            status=status.HTTP_201_CREATED,
        )


class UpdateCartItemAPIView(APIView):
    """
    PATCH /api/v1/cart/items/<int:item_id>/
    """

    permission_classes = [IsAuthenticated]

    def patch(self, request, item_id):
        serializer = UpdateCartItemSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        CartService.update_quantity(
            user=request.user,
            item_id=item_id,
            quantity=serializer.validated_data["quantity"],
        )

        cart = get_cart(request.user)

        return Response(CartSerializer(cart).data)


class RemoveCartItemAPIView(APIView):
    """
    DELETE /api/v1/cart/items/<int:item_id>/
    """

    permission_classes = [IsAuthenticated]

    def delete(self, request, item_id):
        CartService.remove_item(
            user=request.user,
            item_id=item_id,
        )

        cart = get_cart(request.user)

        return Response(CartSerializer(cart).data)


class ClearCartAPIView(APIView):
    """
    DELETE /api/v1/cart/clear/
    """

    permission_classes = [IsAuthenticated]

    def delete(self, request):
        CartService.clear_cart(request.user)

        cart = get_cart(request.user)

        return Response(CartSerializer(cart).data)