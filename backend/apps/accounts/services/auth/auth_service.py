from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed

from apps.accounts.selectors.user_selector import UserSelector
from apps.accounts.services.auth.token_service import TokenService

from apps.accounts.models import User

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
            "user": user,
            "tokens": tokens,
        }
        
    @staticmethod
    def register(data):

        user = User.objects.create_user(

            email=data["email"],

            password=data["password"],

            first_name=data["first_name"],

            last_name=data["last_name"],
        )

        # EmailService.send_verification(user)

        tokens = TokenService.generate_tokens(user)

        return {
            "user": user,
            "tokens": tokens,
        }