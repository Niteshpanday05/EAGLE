import logging
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


logger = logging.getLogger(__name__)


class OrderService:
    """
    Handles complete order creation workflow.

    Flow:

    Cart
      ↓
    Validate cart
      ↓
    Validate address
      ↓
    Calculate pricing
      ↓
    Create order
      ↓
    Create shipping snapshot
      ↓
    Create order items
      ↓
    Create payment record
      ↓
    Clear cart
    """


    @staticmethod
    @transaction.atomic
    def place_order(
        *,
        user,
        address_id,
        payment_method,
        notes="",
    ) -> Order:


        # ---------------------------------
        # Get cart
        # ---------------------------------

        cart = get_cart(user)


        if not cart.items.exists():

            raise ValueError(
                "Cannot place order. Cart is empty."
            )


        logger.info(
            "Starting order creation for user %s",
            user.id,
        )


        # ---------------------------------
        # Validate address
        # ---------------------------------

        address = get_object_or_404(
            Address,
            id=address_id,
            user=user,
        )


        # ---------------------------------
        # Calculate pricing
        # ---------------------------------

        pricing = PricingService.calculate(
            cart
        )


        logger.info(
            "Order pricing calculated: %s",
            pricing,
        )


        # ---------------------------------
        # Create order
        # ---------------------------------

        order = Order.objects.create(

            user=user,

            order_number=(
                uuid.uuid4()
                .hex[:12]
                .upper()
            ),

            payment_method=payment_method,

            subtotal=pricing["subtotal"],

            shipping=pricing["shipping"],

            tax=pricing["tax"],

            discount=pricing["discount"],

            total=pricing["total"],

            notes=notes,
        )


        # ---------------------------------
        # Create shipping snapshot
        # ---------------------------------

        ShippingService.create(
            order=order,
            address=address,
        )


        # ---------------------------------
        # Create order items
        # ---------------------------------

        OrderItemService.create(
            order=order,
            cart=cart,
        )


        # ---------------------------------
        # Create payment
        # ---------------------------------

        PaymentService.create_payment(
            order
        )


        # ---------------------------------
        # Clear cart
        # ---------------------------------

        cart.items.all().delete()


        logger.info(
            "Order created successfully: %s",
            order.order_number,
        )


        return order