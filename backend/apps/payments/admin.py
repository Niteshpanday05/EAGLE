from django.contrib import admin

# Register your models here.

from django.contrib import admin

from .models import Payment


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "order",
        "payment_method",
        "status",
        "amount",
        "currency",
        "created_at",
    )

    list_filter = (
        "payment_method",
        "status",
        "currency",
    )

    search_fields = (
        "order__order_number",
        "transaction_id",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
        "gateway_response",
    )

    ordering = ("-created_at",)