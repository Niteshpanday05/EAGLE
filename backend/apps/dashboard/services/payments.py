from apps.dashboard.selectors.payments import (
    DashboardPaymentsSelector
)


class DashboardPaymentsService:


    @classmethod
    def execute(cls):

        return DashboardPaymentsSelector.execute()