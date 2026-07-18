from django.conf import settings
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from apps.accounts.services.email.email_service import EmailService
from apps.accounts.tokens import email_verification_token


class EmailVerificationService:

    @staticmethod
    def send(user):

        uid = urlsafe_base64_encode(
            force_bytes(user.pk)
        )

        token = email_verification_token.make_token(user)

        verification_url = (
            f"{settings.FRONTEND_URL}"
            f"/verify-email/"
            f"?uid={uid}&token={token}"
        )

        EmailService.send_email(
            subject="Verify your email",
            message=(
                "Click the link below to verify your account:\n\n"
                f"{verification_url}"
            ),
            recipient=user.email,
        )
        
    @staticmethod
    def verify(uid, token):

        try:

            user_id = force_str(
                urlsafe_base64_decode(uid)
            )

            user = User.objects.get(pk=user_id)

        except Exception:
            raise ValidationError(
                "Invalid verification link."
            )

        if not email_verification_token.check_token(
            user,
            token,
        ):
            raise ValidationError(
                "Verification token expired."
            )

        user.is_verified = True

        user.save(update_fields=["is_verified"])

        return user
        