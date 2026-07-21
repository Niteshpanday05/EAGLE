from decimal import Decimal


FREE_SHIPPING_THRESHOLD = Decimal("1000.00")
SHIPPING_COST = Decimal("100.00")
TAX_RATE = Decimal("0.13")


def calculate_shipping(subtotal: Decimal) -> Decimal:
    if subtotal >= FREE_SHIPPING_THRESHOLD:
        return Decimal("0.00")
    return SHIPPING_COST


def calculate_tax(subtotal: Decimal) -> Decimal:
    return subtotal * TAX_RATE