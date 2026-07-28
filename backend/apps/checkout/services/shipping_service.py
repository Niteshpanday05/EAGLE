from decimal import Decimal

from apps.addresses.selectors import get_default_address


class ShippingService:

    @classmethod
    def get_shipping(cls, user):

        address = get_default_address(user)

        shipping_cost = Decimal("0.00")

        return {
            "address": address,
            "shipping_cost": shipping_cost,
        }