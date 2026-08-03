from apps.dashboard.selectors.reports import (
    DashboardReportsSelector
)


class DashboardReportsService:


    @classmethod
    def execute(cls):

        return DashboardReportsSelector.execute()