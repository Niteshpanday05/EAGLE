from django.db.models import Sum, F, DecimalField, ExpressionWrapper

from apps.products.models import Product


class DashboardInventorySelector:
    """
    Inventory related dashboard queries.
    """

    LOW_STOCK_LIMIT = 5


    @classmethod
    def execute(cls):

        return {
            "summary": cls.get_summary(),
            "low_stock_products": cls.get_low_stock_products(),
            "out_of_stock_products": cls.get_out_of_stock_products(),
            "highest_stock_products": cls.get_highest_stock_products(),
        }


    @classmethod
    def get_summary(cls):

        stock_value = (
            Product.objects
            .annotate(
                value=ExpressionWrapper(
                    F("stock") * F("price"),
                    output_field=DecimalField(
                        max_digits=12,
                        decimal_places=2,
                    ),
                )
            )
            .aggregate(
                total=Sum("value")
            )
            .get("total")
            or 0
        )


        return {

            "total_products":
                Product.objects.count(),


            "total_stock":
                Product.objects.aggregate(
                    total=Sum("stock")
                )["total"] or 0,


            "out_of_stock":
                Product.objects.filter(
                    stock=0
                ).count(),


            "low_stock":
                Product.objects.filter(
                    stock__gt=0,
                    stock__lte=cls.LOW_STOCK_LIMIT,
                ).count(),


            "inventory_value":
                stock_value,
        }


    @classmethod
    def get_low_stock_products(cls):

        products = (
            Product.objects
            .filter(
                stock__gt=0,
                stock__lte=cls.LOW_STOCK_LIMIT,
            )
            .order_by("stock")
        )


        return [
            {
                "id": str(product.id),
                "name": product.name,
                "stock": product.stock,
                "price": product.price,
            }

            for product in products
        ]


    @classmethod
    def get_out_of_stock_products(cls):

        products = (
            Product.objects
            .filter(
                stock=0
            )
        )


        return [
            {
                "id": str(product.id),
                "name": product.name,
                "brand": product.brand,
            }

            for product in products
        ]


    @classmethod
    def get_highest_stock_products(cls):

        products = (
            Product.objects
            .order_by("-stock")[:10]
        )


        return [
            {
                "id": str(product.id),
                "name": product.name,
                "stock": product.stock,
            }

            for product in products
        ]