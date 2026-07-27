from rest_framework import status
from rest_framework.exceptions import APIException


class AddressException(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = "Address operation failed."
    default_code = "address_error"


class AddressNotFoundException(AddressException):
    default_detail = "Address not found."
    default_code = "address_not_found"


class DefaultAddressException(AddressException):
    default_detail = "Unable to set default address."
    default_code = "default_address_error"