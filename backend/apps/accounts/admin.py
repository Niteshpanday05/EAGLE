from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


@admin.register(User)
class CustomUserAdmin(UserAdmin):

    ordering = ("-created_at",)

    list_display = (
        "id",
        "email",
        "first_name",
        "last_name",
        "is_verified",
        "is_staff",
        "is_active",
    )

    list_filter = (
        "is_staff",
        "is_active",
        "is_verified",
    )

    search_fields = (
        "email",
        "first_name",
        "last_name",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "email",
                    "password",
                )
            },
        ),
        (
            "Personal",
            {
                "fields": (
                    "first_name",
                    "last_name",
                    "phone",
                    "avatar",
                )
            },
        ),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "is_verified",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        (
            "Dates",
            {
                "fields": (
                    "last_login",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "email",
                    "password1",
                    "password2",
                ),
            },
        ),
    )