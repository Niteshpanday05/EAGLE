from apps.dashboard.selectors.orders import DashboardOrdersSelector


class DashboardOrdersService:
    """
    Business logic for dashboard orders.
    """

    @staticmethod
    def execute(limit=10):
        return DashboardOrdersSelector.execute(limit)