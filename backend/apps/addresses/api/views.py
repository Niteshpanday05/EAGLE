from rest_framework import status
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.addresses.api.serializers import (
    AddressSerializer,
    AddressCreateUpdateSerializer,
)
from apps.addresses.selectors import (
    get_addresses,
    get_address,
)
from apps.addresses.services.address_service import AddressService


class AddressListCreateView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.request.method == "POST":
            return AddressCreateUpdateSerializer
        return AddressSerializer

    def get_queryset(self):
        return get_addresses(self.request.user)

    def perform_create(self, serializer):
        AddressService.create_address(
            user=self.request.user,
            validated_data=serializer.validated_data,
        )


class AddressDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.request.method in ("PUT", "PATCH"):
            return AddressCreateUpdateSerializer
        return AddressSerializer

    def get_object(self):
        return get_address(
            self.request.user,
            self.kwargs["pk"],
        )

    def perform_update(self, serializer):
        AddressService.update_address(
            user=self.request.user,
            address_id=self.kwargs["pk"],
            validated_data=serializer.validated_data,
        )

    def perform_destroy(self, instance):
        AddressService.delete_address(
            user=self.request.user,
            address_id=instance.id,
        )


class SetDefaultAddressView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, pk):
        address = AddressService.set_default(
            user=request.user,
            address_id=pk,
        )

        serializer = AddressSerializer(address)

        return Response(serializer.data, status=status.HTTP_200_OK)