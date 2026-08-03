from apps.dashboard.selectors.inventory import (
    DashboardInventorySelector
)


class DashboardInventoryService:

    @classmethod
    def execute(cls):

        return DashboardInventorySelector.execute()