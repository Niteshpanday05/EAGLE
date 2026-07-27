from apps.checkout.dto import CheckoutDTO, CheckoutItemDTO
from apps.checkout.selectors import get_cart
from apps.checkout.services.pricing_service import PricingService
from apps.checkout.services.stock_service import StockService


class CheckoutService:

    @classmethod
    def get_checkout(cls, user):

        cart = get_cart(user)

        StockService.validate(cart)

        pricing = PricingService.calculate(cart)

        items = []

        for item in cart.items.all():

            items.append(
                CheckoutItemDTO(
                    id=item.id,
                    product_id=item.product.id,
                    product_name=item.product.name,
                    thumbnail=item.product.thumbnail.url if item.product.thumbnail else "",
                    price=item.product.price,
                    quantity=item.quantity,
                    subtotal=item.product.price * item.quantity,
                )
            )

        return CheckoutDTO(
            items=items,
            subtotal=pricing["subtotal"],
            shipping=pricing["shipping"],
            tax=pricing["tax"],
            discount=pricing["discount"],
            total=pricing["total"],
        )
        
    @classmethod
    def place_order(cls, user, address_id, payment_method):

        cart = get_cart(user)

        StockService.validate(cart)

        ShippingService.validate_address(
            user=user,
            address_id=address_id,
        )

        pricing = PricingService.calculate(cart)

        return {
            "message": "Checkout validation successful.",
            "payment_method": payment_method,
            "subtotal": pricing["subtotal"],
            "shipping": pricing["shipping"],
            "tax": pricing["tax"],
            "discount": pricing["discount"],
            "total": pricing["total"],
        }