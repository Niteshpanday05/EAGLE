from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from accounts.api.serializers.forgot_password import (
    ForgotPasswordSerializer,
)
from accounts.services.auth.forgot_password_service import (
    ForgotPasswordService,
)


class ForgotPasswordView(GenericAPIView):

    serializer_class = ForgotPasswordSerializer
    permission_classes = []

    def post(self, request):

        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        ForgotPasswordService.execute(
            serializer.validated_data["email"]
        )

        return Response(
            {
                "message": (
                    "If an account exists with this email, "
                    "a password reset link has been sent."
                )
            },
            status=status.HTTP_200_OK,
        )