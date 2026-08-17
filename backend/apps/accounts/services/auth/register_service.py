from django.contrib.auth import get_user_model
from django.db import transaction

from apps.accounts.services.auth.email_verification_service import (
    EmailVerificationService,
)


User = get_user_model()


class RegisterService:

    @staticmethod
    @transaction.atomic
    def register(**validated_data):

        user = User.objects.create_user(
            **validated_data,
            is_active=True,
            is_verified=False,
        )

        transaction.on_commit(
            lambda: EmailVerificationService.send(user)
        )

        return user