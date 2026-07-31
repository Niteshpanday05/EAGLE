from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import Hero


@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "badge",
        "display_order",
        "is_active",
        "updated_at",
    )

    list_filter = (
        "is_active",
    )

    search_fields = (
        "title",
        "badge",
    )

    ordering = (
        "display_order",
    )