from apps.checkout.exceptions import (
    CartEmptyException,
    OutOfStockException,
    ProductUnavailableException,
)


class StockService:
    @staticmethod
    def validate(cart):
        items = cart.items.all()

        if not items.exists():
            raise CartEmptyException()

        for item in items:
            product = item.product

            if not product.is_active:
                raise ProductUnavailableException(
                    f"{product.name} is no longer available."
                )

            if item.quantity > product.stock:
                raise OutOfStockException(
                    f"Only {product.stock} unit(s) of '{product.name}' are available."
                )

        return True