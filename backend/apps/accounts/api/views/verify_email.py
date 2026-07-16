from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from accounts.api.serializers.verify_email import (
    VerifyEmailSerializer,
)

from accounts.services.auth.email_verification_service import (
    EmailVerificationService,
)


class VerifyEmailView(GenericAPIView):

    serializer_class = VerifyEmailSerializer

    permission_classes = []

    def post(self, request):

        serializer = self.get_serializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        EmailVerificationService.verify(
            **serializer.validated_data
        )

        return Response(
            {
                "message":
                "Email verified successfully."
            }
        )