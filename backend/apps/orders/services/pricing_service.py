from decimal import Decimal

from apps.orders.constants import (
    DEFAULT_DISCOUNT,
    DEFAULT_SHIPPING_COST,
    DEFAULT_TAX,
)


class PricingService:

    @staticmethod
    def calculate(cart):

        subtotal = Decimal("0.00")

        for item in cart.items.select_related("product"):

            subtotal += (
                item.product.price * item.quantity
            )

        shipping = DEFAULT_SHIPPING_COST
        tax = DEFAULT_TAX
        discount = DEFAULT_DISCOUNT

        total = (
            subtotal
            + shipping
            + tax
            - discount
        )

        return {
            "subtotal": subtotal,
            "shipping": shipping,
            "tax": tax,
            "discount": discount,
            "total": total,
        }