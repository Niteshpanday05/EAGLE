from django.urls import path

from apps.accounts.api.views.login import LoginView
from apps.accounts.api.views.profile import MeView
from apps.accounts.api.views.register import RegisterView
from apps.accounts.api.views.logout import LogoutView
from apps.accounts.api.views.verify_email import VerifyEmailView
from apps.accounts.api.views.forgot_password import ForgotPasswordView
urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("register/", RegisterView.as_view(), name="register"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("me/", MeView.as_view(), name="me"),
    path(
        "verify-email/",
        VerifyEmailView.as_view(),
        name="verify-email",
    ),
    path(
        "forgot-password/",
        ForgotPasswordView.as_view(),
        name="forgot-password",
    ),
]
