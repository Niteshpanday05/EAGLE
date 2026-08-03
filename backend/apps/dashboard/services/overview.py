from apps.dashboard.selectors import DashboardOverviewSelector


class DashboardOverviewService:
    """
    Dashboard overview business logic.
    """

    @staticmethod
    def execute():
        return DashboardOverviewSelector.execute()