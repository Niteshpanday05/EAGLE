from apps.dashboard.selectors.products import (
    DashboardProductsSelector
)


class DashboardProductsService:

    @classmethod
    def execute(cls):

        return DashboardProductsSelector.execute()