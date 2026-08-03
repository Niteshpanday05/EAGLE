from apps.dashboard.selectors.customers import (
    DashboardCustomersSelector
)


class DashboardCustomersService:


    @classmethod
    def execute(cls):

        return DashboardCustomersSelector.execute()