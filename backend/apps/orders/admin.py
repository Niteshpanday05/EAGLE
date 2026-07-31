from django.contrib import admin

from .models import Order, OrderItem


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        "order_number",
        "user",
        "status",
        "payment_status",
        "total",
        "created_at",
    )

    search_fields = (
        "order_number",
        "user__email",
    )

    list_filter = (
        "status",
        "payment_status",
        "created_at",
    )


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = (
        "order",
        "product",
        "quantity",
        "unit_price",
        "subtotal",
    )

    search_fields = (
        "order__order_number",
        "product__name",
    )