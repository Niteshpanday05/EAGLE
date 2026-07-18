from django.urls import path

from apps.products.api.views.product_list import ProductListView
from apps.products.api.views.product_detail import ProductDetailView
from apps.products.api.views.category_list import CategoryListView

# from apps.products.api.views.brand_list import BrandListView
# from apps.products.api.views.featured_products import FeaturedProductListView
# from apps.products.api.views.related_products import RelatedProductsView
# from apps.products.api.views.search_products import ProductSearchView
# from apps.products.api.views.review_list import ProductReviewListView
# from apps.products.api.views.review_create import ProductReviewCreateView

app_name = "products"

urlpatterns = [

    # ==========================================
    # Product
    # ==========================================

    path(
        "",
        ProductListView.as_view(),
        name="product-list",
    ),

    path(
        "<slug:slug>/",
        ProductDetailView.as_view(),
        name="product-detail",
    ),

    # path(
    #     "featured/",
    #     FeaturedProductListView.as_view(),
    #     name="featured-products",
    # ),

    # path(
    #     "<slug:slug>/related/",
    #     RelatedProductsView.as_view(),
    #     name="related-products",
    # ),

    # path(
    #     "search/",
    #     ProductSearchView.as_view(),
    #     name="product-search",
    # ),

    # ==========================================
    # Categories
    # ==========================================

    path(
        "categories/",
        CategoryListView.as_view(),
        name="category-list",
    ),

    # ==========================================
    # Brands
    # ==========================================

    # path(
    #     "brands/",
    #     BrandListView.as_view(),
    #     name="brand-list",
    # ),

    # ==========================================
    # Reviews
    # ==========================================

    # path(
    #     "<slug:slug>/reviews/",
    #     ProductReviewListView.as_view(),
    #     name="review-list",
    # ),

    # path(
    #     "<slug:slug>/reviews/create/",
    #     ProductReviewCreateView.as_view(),
    #     name="review-create",
    # ),
]