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

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        address = AddressService.create_address(
            user=request.user,
            validated_data=serializer.validated_data,
        )

        response_serializer = AddressSerializer(
            address
        )

        return Response(
            response_serializer.data,
            status=status.HTTP_201_CREATED,
        )


class AddressDetailView(
    RetrieveUpdateDestroyAPIView
):
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.request.method in (
            "PUT",
            "PATCH",
        ):
            return AddressCreateUpdateSerializer

        return AddressSerializer

    def get_object(self):
        return get_address(
            self.request.user,
            self.kwargs["pk"],
        )

    def update(self, request, *args, **kwargs):
        address = self.get_object()

        serializer = self.get_serializer(
            address,
            data=request.data,
            partial=True,
        )

        serializer.is_valid(
            raise_exception=True
        )

        updated_address = AddressService.update_address(
            user=request.user,
            address_id=address.id,
            validated_data=serializer.validated_data,
        )

        response_serializer = AddressSerializer(
            updated_address
        )

        return Response(
            response_serializer.data,
            status=status.HTTP_200_OK,
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

        serializer = AddressSerializer(
            address
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
        )