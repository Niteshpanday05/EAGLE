from django.urls import path

from accounts.api.views.login import LoginView
from accounts.api.views.profile import MeView
from accounts.api.views.register import RegisterView
from accounts.api.views.logout import LogoutView
from accounts.api.views.verify_email import VerifyEmailView
from accounts.api.views.forgot_password import ForgotPasswordView

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
