from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed

from apps.accounts.api.serializers.user import UserSerializer
from apps.accounts.services.auth.register_service import RegisterService
from apps.accounts.services.auth.token_service import TokenService


class AuthService:

    @staticmethod
    def login(email: str, password: str):

        user = authenticate(
            email=email,
            password=password,
        )

        if user is None:
            raise AuthenticationFailed(
                "Invalid email or password."
            )

        if not user.is_active:
            raise AuthenticationFailed(
                "User account is inactive."
            )

        tokens = TokenService.generate_tokens(user)

        return {
            "user": UserSerializer(user).data,
            "tokens": tokens,
        }

    @staticmethod
    def register(data):

        user = RegisterService.register(
            **data
        )

        return {
            "user": UserSerializer(user).data,
        }