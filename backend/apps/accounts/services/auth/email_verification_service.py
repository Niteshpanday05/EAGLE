from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.utils.encoding import force_bytes, force_str
from django.utils.http import (
    urlsafe_base64_decode,
    urlsafe_base64_encode,
)

from apps.accounts.services.email.email_service import EmailService
from apps.accounts.tokens import email_verification_token


User = get_user_model()


class EmailVerificationService:

    @staticmethod
    def send(user):

        uid = urlsafe_base64_encode(
            force_bytes(user.pk)
        )

        token = email_verification_token.make_token(user)

        verification_url = (
            f"{settings.FRONTEND_URL.rstrip('/')}"
            f"/verify-email/"
            f"?uid={uid}&token={token}"
        )

        EmailService.send_email(
            subject="Verify your email",
            message=(
                "Welcome!\n\n"
                "Please click the link below to verify "
                "your email address:\n\n"
                f"{verification_url}\n\n"
                "If you did not create this account, "
                "you can safely ignore this email."
            ),
            recipient=user.email,
        )

    @staticmethod
    def verify(uid, token):

        try:
            user_id = force_str(
                urlsafe_base64_decode(uid)
            )

            user = User.objects.get(
                pk=user_id
            )

        except (
            TypeError,
            ValueError,
            OverflowError,
            User.DoesNotExist,
        ):
            raise ValidationError(
                "Invalid verification link."
            )

        if user.is_verified:
            raise ValidationError(
                "Email is already verified."
            )

        if not email_verification_token.check_token(
            user,
            token,
        ):
            raise ValidationError(
                "Invalid or expired verification link."
            )

        user.is_verified = True

        user.save(
            update_fields=["is_verified"]
        )

        return user