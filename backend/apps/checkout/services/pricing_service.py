from decimal import Decimal
from django.conf import settings


class PricingService:

    SHIPPING_COST = Decimal("0.00")
    TAX = Decimal("0.00")
    DISCOUNT = Decimal("0.00")

    @classmethod
    def calculate(cls, cart):

        subtotal = Decimal("0.00")

        for item in cart.items.all():
            subtotal += item.product.final_price * item.quantity

            shipping = settings.DEFAULT_SHIPPING_COST
            tax = (subtotal * settings.DEFAULT_TAX_RATE).quantize(
            Decimal("0.01")
)
        discount = cls.DISCOUNT

        total = subtotal + shipping + tax - discount

        return {
            "subtotal": subtotal,
            "shipping": shipping,
            "tax": tax,
            "discount": discount,
            "total": total,
        }