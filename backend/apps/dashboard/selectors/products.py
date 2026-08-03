from django.db.models import Avg, Sum

from apps.products.models import Product
from apps.orders.models import OrderItem


class DashboardProductsSelector:
    """
    Product related dashboard database queries.
    """

    LOW_STOCK_LIMIT = 5


    @classmethod
    def execute(cls):

        return {
            "summary": cls.get_summary(),
            "top_products": cls.get_top_products(),
            "recent_products": cls.get_recent_products(),
        }


    @classmethod
    def get_summary(cls):

        return {

            "total_products":
                Product.objects.count(),


            "active_products":
                Product.objects.filter(
                    is_active=True
                ).count(),


            "inactive_products":
                Product.objects.filter(
                    is_active=False
                ).count(),


            "out_of_stock":
                Product.objects.filter(
                    stock=0
                ).count(),


            "low_stock":
                Product.objects.filter(
                    stock__gt=0,
                    stock__lte=cls.LOW_STOCK_LIMIT,
                ).count(),


            "average_rating":
                Product.objects.aggregate(
                    avg=Avg("rating")
                )["avg"] or 0,

        }


    @classmethod
    def get_top_products(cls):

        products = (

            OrderItem.objects

            .values(
                "product__id",
                "product__name",
            )

            .annotate(
                total_sold=Sum("quantity")
            )

            .order_by(
                "-total_sold"
            )[:10]

        )


        return list(products)



    @classmethod
    def get_recent_products(cls):

        products = Product.objects.all()[:10]


        return [

            {
                "id": str(product.id),

                "name": product.name,

                "brand": product.brand,

                "price": product.price,

                "stock": product.stock,

                "rating": product.rating,

                "created_at": product.created_at,

            }

            for product in products

        ]