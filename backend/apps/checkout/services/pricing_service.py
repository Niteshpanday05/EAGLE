from decimal import Decimal


class PricingService:

    SHIPPING_COST = Decimal("0.00")
    TAX = Decimal("0.00")
    DISCOUNT = Decimal("0.00")

    @classmethod
    def calculate(cls, cart):

        subtotal = Decimal("0.00")

        for item in cart.items.all():
            subtotal += item.product.price * item.quantity

        shipping = cls.SHIPPING_COST
        tax = cls.TAX
        discount = cls.DISCOUNT

        total = subtotal + shipping + tax - discount

        return {
            "subtotal": subtotal,
            "shipping": shipping,
            "tax": tax,
            "discount": discount,
            "total": total,
        }