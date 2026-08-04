from apps.dashboard.selectors.analytics import DashboardAnalyticsSelector


class DashboardAnalyticsService:

    @staticmethod
    def execute(days=30):
        return DashboardAnalyticsSelector.execute(days)