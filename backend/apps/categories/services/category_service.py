from .selectors import CategorySelector


class CategoryService:

    @staticmethod
    def list_categories(search=None):

        return CategorySelector.list_categories(
            search=search,
        )

    @staticmethod
    def retrieve_category(slug):

        return CategorySelector.get_category(
            slug=slug,
        )