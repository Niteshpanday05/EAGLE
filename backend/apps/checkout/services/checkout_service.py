from apps.addresses.api.serializers import AddressSerializer
from apps.addresses.selectors import get_addresses

from apps.checkout.selectors import get_cart
from apps.checkout.services.pricing_service import PricingService
from apps.checkout.services.shipping_service import ShippingService
from apps.checkout.services.stock_service import StockService


class CheckoutService:

    @classmethod
    def get_checkout(cls, user):

        cart = get_cart(user)

        StockService.validate(cart)

        pricing = PricingService.calculate(cart)

        shipping = ShippingService.get_shipping(user)

        items = [
            {
                "id": item.id,
                "product_id": item.product.id,
                "product_name": item.product.name,
                "thumbnail": (
                    item.product.thumbnail.url
                    if item.product.thumbnail
                    else ""
                ),
                "price": item.product.price,
                "quantity": item.quantity,
                "subtotal": item.product.price * item.quantity,
            }
            for item in cart.items.all()
        ]

        return {
            "items": items,
            "addresses": AddressSerializer(
                get_addresses(user),
                many=True,
            ).data,
            "default_address": (
                AddressSerializer(shipping["address"]).data
                if shipping["address"]
                else None
            ),
            "subtotal": pricing["subtotal"],
            "shipping": shipping["shipping_cost"],
            "tax": pricing["tax"],
            "discount": pricing["discount"],
            "total": (
                pricing["subtotal"]
                + shipping["shipping_cost"]
                + pricing["tax"]
                - pricing["discount"]
            ),
            "payment_methods": [
                {
                    "code": "COD",
                    "name": "Cash on Delivery",
                }
            ],
        }