from django.contrib import admin

from .models import Address


@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "user",
        "full_name",
        "phone_number",
        "city",
        "country",
        "is_default",
        "is_active",
    )

    list_filter = (
        "country",
        "is_default",
        "is_active",
    )

    search_fields = (
        "full_name",
        "phone_number",
        "city",
        "user__email",
    )

    ordering = ("-created_at",)