from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from apps.accounts.api.serializers.register import RegisterSerializer
from apps.accounts.services.auth.auth_service import AuthService


class RegisterView(GenericAPIView):

    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def post(self, request):

        serializer = self.get_serializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        result = AuthService.register(
            serializer.validated_data
        )

        return Response(
            {
                "message": (
                    "Registration successful. "
                    "Please check your email "
                    "to verify your account."
                ),
                "user": result["user"],
            },
            status=status.HTTP_201_CREATED,
        )