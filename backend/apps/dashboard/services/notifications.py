from apps.dashboard.selectors.notifications import (
    DashboardNotificationsSelector
)


class DashboardNotificationsService:


    @classmethod
    def execute(cls):

        return DashboardNotificationsSelector.execute()