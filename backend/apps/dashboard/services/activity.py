from apps.dashboard.selectors.activity import (
    DashboardActivitySelector
)


class DashboardActivityService:


    @classmethod
    def execute(cls):

        return DashboardActivitySelector.execute()