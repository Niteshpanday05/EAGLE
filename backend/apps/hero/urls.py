from django.urls import path

from .views import HeroListAPIView

urlpatterns = [
    path(
        "",
        HeroListAPIView.as_view(),
        name="hero-list",
    ),
]