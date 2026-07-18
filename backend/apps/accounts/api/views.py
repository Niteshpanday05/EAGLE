from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.api.serializers import LoginSerializer
from apps.accounts.services.auth.auth_service import AuthService

class LoginView(APIView):

    permission_classes = []

    def post(self, request):

        serializer = LoginSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        result = AuthService.login(
            **serializer.validated_data
        )

        return Response(
            {
                "user": {
                    "id": result["user"].id,
                    "email": result["user"].email,
                    "first_name": result["user"].first_name,
                    "last_name": result["user"].last_name,
                },
                "tokens": result["tokens"],
            },
            status=status.HTTP_200_OK,
        )