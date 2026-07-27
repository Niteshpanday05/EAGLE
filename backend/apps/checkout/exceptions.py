from rest_framework import status
from rest_framework.exceptions import APIException


class CheckoutException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = "Checkout failed."
    default_code = "checkout_error"


class CartEmptyException(CheckoutException):
    default_detail = "Your cart is empty."
    default_code = "cart_empty"


class OutOfStockException(CheckoutException):
    default_detail = "One or more products are out of stock."
    default_code = "out_of_stock"


class ProductUnavailableException(CheckoutException):
    default_detail = "One or more products are unavailable."
    default_code = "product_unavailable"