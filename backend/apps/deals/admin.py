from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import Deal, DealProduct


class DealProductInline(admin.TabularInline):
    model = DealProduct

    extra = 1

    autocomplete_fields = [
        "product",
    ]

    readonly_fields = [
        "created_at",
    ]

    fields = [
        "product",
        "created_at",
    ]


@admin.register(Deal)
class DealAdmin(admin.ModelAdmin):

    list_display = [
        "name",
        "discount_display",
        "starts_at",
        "ends_at",
        "status_display",
        "priority",
        "used_count",
        "max_uses",
    ]

    list_filter = [
        "is_active",
        "discount_type",
        "starts_at",
        "ends_at",
    ]

    search_fields = [
        "name",
        "slug",
        "description",
    ]

    readonly_fields = [
        "id",
        "used_count",
        "created_at",
        "updated_at",
        "status_display",
    ]

    prepopulated_fields = {
        "slug": (
            "name",
        ),
    }

    ordering = [
        "-created_at",
    ]

    autocomplete_fields = []

    fieldsets = (
        (
            "Basic Information",
            {
                "fields": (
                    "id",
                    "name",
                    "slug",
                    "description",
                ),
            },
        ),
        (
            "Discount",
            {
                "fields": (
                    "discount_type",
                    "discount_value",
                ),
            },
        ),
        (
            "Schedule",
            {
                "fields": (
                    "starts_at",
                    "ends_at",
                ),
            },
        ),
        (
            "Usage",
            {
                "fields": (
                    "max_uses",
                    "used_count",
                ),
            },
        ),
        (
            "Status",
            {
                "fields": (
                    "is_active",
                    "priority",
                    "status_display",
                ),
            },
        ),
        (
            "Timestamps",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                ),
            },
        ),
    )

    inlines = [
        DealProductInline,
    ]

    def discount_display(self, obj):
        if obj.discount_type == Deal.DiscountType.PERCENTAGE:
            return f"{obj.discount_value}% OFF"

        return f"Rs. {obj.discount_value} OFF"

    discount_display.short_description = "Discount"

    @admin.display(
        description="Status"
    )
    def status_display(self, obj):

        if not obj.is_active:
            return "Inactive"

        if obj.is_upcoming:
            return "Upcoming"

        if obj.is_expired:
            return "Expired"

        if (
            obj.max_uses is not None
            and obj.used_count >= obj.max_uses
        ):
            return "Sold Out"

        return "Active"


@admin.register(DealProduct)
class DealProductAdmin(admin.ModelAdmin):

    list_display = [
        "deal",
        "product",
        "created_at",
    ]

    search_fields = [
        "deal__name",
        "product__name",
        "product__sku",
    ]

    list_filter = [
        "deal",
    ]

    autocomplete_fields = [
        "deal",
        "product",
    ]

    readonly_fields = [
        "id",
        "created_at",
    ]