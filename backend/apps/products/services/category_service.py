from apps.products.selectors.category_selector import (
    CategorySelector,
)


class CategoryService:

    @staticmethod
    def list():

        return CategorySelector.list()