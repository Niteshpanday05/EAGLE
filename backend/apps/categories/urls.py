from django.urls import path

from apps.categories.api.views import (
    CategoryDetailAPIView,
    CategoryListAPIView,
)

app_name = "categories"

urlpatterns = [
    path(
        "",
        CategoryListAPIView.as_view(),
        name="list",
    ),
    path(
        "<slug:slug>/",
        CategoryDetailAPIView.as_view(),
        name="detail",
    ),
]