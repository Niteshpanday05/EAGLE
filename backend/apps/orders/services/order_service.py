import uuid

from django.db import transaction
from django.shortcuts import get_object_or_404

from apps.addresses.models import Address
from apps.cart.selectors import get_cart
from apps.orders.models import Order
from apps.orders.services.order_item_service import (
    OrderItemService,
)
from apps.orders.services.pricing_service import (
    PricingService,
)
from apps.orders.services.shipping_service import (
    ShippingService,
)
from apps.payments.services.payment_service import (
    PaymentService,
)


class OrderService:

    @staticmethod
    @transaction.atomic
    def place_order(
        *,
        user,
        address_id,
        payment_method,
        notes="",
    ):

        cart = get_cart(user)

        if not cart.items.exists():
            raise ValueError("Cart is empty.")

        address = get_object_or_404(
            Address,
            id=address_id,
            user=user,
        )

        pricing = PricingService.calculate(cart)

        order = Order.objects.create(
            user=user,
            order_number=uuid.uuid4().hex[:12].upper(),
            payment_method=payment_method,
            subtotal=pricing["subtotal"],
            shipping=pricing["shipping"],
            tax=pricing["tax"],
            discount=pricing["discount"],
            total=pricing["total"],
            notes=notes,
        )

        ShippingService.create(
            order=order,
            address=address,
        )

        OrderItemService.create(
            order=order,
            cart=cart,
        )

        # Create payment record
        payment = PaymentService.create_payment(
            order
        )

        # Remove cart items
        cart.items.all().delete()

        return order