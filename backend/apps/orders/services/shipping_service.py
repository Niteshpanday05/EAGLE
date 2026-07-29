from apps.orders.models import ShippingAddress


class ShippingService:

    @staticmethod
    def create(order, address):

        return ShippingAddress.objects.create(
            order=order,
            full_name=address.full_name,
            email=order.user.email,
            phone=address.phone_number,
            country=address.country,
            province=address.state,
            city=address.city,
            street_address=address.address_line_1,
            postal_code=address.postal_code,
        )