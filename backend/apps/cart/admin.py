from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import Cart, CartItem


class CartItemInline(admin.TabularInline):
    model = CartItem
    extra = 0
    readonly_fields = (
        "product",
        "quantity",
        "created_at",
    )


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "user",
        "total_items",
        "total_quantity",
        "subtotal",
        "updated_at",
    )

    search_fields = (
        "user__email",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    inlines = [
        CartItemInline,
    ]


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = (
        "cart",
        "product",
        "quantity",
        "subtotal",
        "created_at",
    )

    search_fields = (
        "product__name",
        "cart__user__email",
    )

    list_filter = (
        "created_at",
    )