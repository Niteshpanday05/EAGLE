from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from accounts.services.email.email_service import EmailService

User = get_user_model()


class ForgotPasswordService:

    @staticmethod
    def execute(email: str):

        user = User.objects.filter(email=email).first()

        # Do not reveal whether the email exists.
        if not user:
            return

        uid = urlsafe_base64_encode(force_bytes(user.pk))

        token = PasswordResetTokenGenerator().make_token(user)

        reset_url = (
            f"{settings.FRONTEND_URL}"
            f"/reset-password"
            f"?uid={uid}&token={token}"
        )

        EmailService.send_email(
            subject="Reset your password",
            message=f"Click the link below to reset your password:\n\n{reset_url}",
            recipient=user.email,
        )