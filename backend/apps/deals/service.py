from decimal import Decimal, ROUND_HALF_UP

from django.db import transaction

from .models import Deal
from .selectors import get_active_deal_for_product


class DealService:
    """
    Centralized business logic for Deals.
    """

    @staticmethod
    def calculate_discount(
        price: Decimal,
        deal: Deal,
    ) -> Decimal:
        """
        Calculate the discount amount for a given price.
        """

        if price <= 0:
            return Decimal("0.00")

        if deal.discount_type == Deal.DiscountType.PERCENTAGE:

            discount = (
                price * deal.discount_value / Decimal("100")
            )

        elif deal.discount_type == Deal.DiscountType.FIXED:

            discount = deal.discount_value

        else:
            discount = Decimal("0.00")

        # Never allow discount to exceed product price.
        discount = min(discount, price)

        return discount.quantize(
            Decimal("0.01"),
            rounding=ROUND_HALF_UP,
        )

    @classmethod
    def calculate_price(cls, product, deal=None):
        """
        Calculate the promotional price for a product.

        If no deal is provided, the currently active deal
        for the product will be used.
        """

        base_price = product.price

        if deal is None:
            deal = get_active_deal_for_product(product)

        if deal is None:
            return {
                "product": product,
                "deal": None,
                "base_price": base_price,
                "discount_amount": Decimal("0.00"),
                "final_price": base_price,
            }

        if not deal.is_currently_active:
            return {
                "product": product,
                "deal": None,
                "base_price": base_price,
                "discount_amount": Decimal("0.00"),
                "final_price": base_price,
            }

        discount_amount = cls.calculate_discount(
            price=base_price,
            deal=deal,
        )

        final_price = base_price - discount_amount

        return {
            "product": product,
            "deal": deal,
            "base_price": base_price,
            "discount_amount": discount_amount,
            "final_price": final_price,
        }

    @classmethod
    def validate_deal(cls, product, deal):
        """
        Validate that a deal can currently be applied
        to a product.
        """

        if not deal:
            return False

        if not deal.is_currently_active:
            return False

        if not deal.products.filter(
            pk=product.pk
        ).exists():
            return False

        return True

    @classmethod
    @transaction.atomic
    def record_usage(cls, deal):
        """
        Increment deal usage safely.
        """

        deal = (
            Deal.objects
            .select_for_update()
            .get(pk=deal.pk)
        )

        if (
            deal.max_uses is not None
            and deal.used_count >= deal.max_uses
        ):
            raise ValueError(
                "This deal has reached its usage limit."
            )

        deal.used_count += 1
        deal.save(
            update_fields=[
                "used_count",
                "updated_at",
            ]
        )

        return deal