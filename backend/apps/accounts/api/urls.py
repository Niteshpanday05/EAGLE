from django.urls import path

from apps.accounts.api.views.logout import LogoutAPIView

urlpatterns = [
    path(
        "logout/",
        LogoutAPIView.as_view(),
        name="logout",
    ),
]