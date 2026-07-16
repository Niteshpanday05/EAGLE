from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from accounts.api.serializers.logout import LogoutSerializer
from accounts.services.auth.logout_service import LogoutService


class LogoutView(GenericAPIView):
    serializer_class = LogoutSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        LogoutService.logout(
            serializer.validated_data["refresh"]
        )

        return Response(
            {"message": "Logged out successfully."},
            status=status.HTTP_200_OK,
        )