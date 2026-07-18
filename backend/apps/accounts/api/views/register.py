from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from apps.accounts.api.serializers.register import RegisterSerializer
from apps.accounts.api.serializers.user import UserSerializer
from apps.accounts.services.auth.auth_service import AuthService


class RegisterView(GenericAPIView):

    serializer_class = RegisterSerializer

    permission_classes = []

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
                "user": UserSerializer(
                    result["user"]
                ).data,

                "tokens": result["tokens"],
            },
            status=status.HTTP_201_CREATED,
        )