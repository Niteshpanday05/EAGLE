from .analytics import DashboardAnalyticsView
from .overview import DashboardOverviewView
from .orders import DashboardOrdersView
from .products import DashboardProductsView
from .inventory import DashboardInventoryView
from .payments import DashboardPaymentsView
from .customers import DashboardCustomersView
from .reports import DashboardReportsView
from .activity import DashboardActivityView
from .notifications import DashboardNotificationsView

from .orders import (
    DashboardOrderListView,
    DashboardOrderDetailView,
    DashboardOrderStatusUpdateView,
    DashboardOrderStatsView,
)

__all__ = [
    "DashboardOverviewView",
    "DashboardAnalyticsView",
    "DashboardOrdersView",
    "DashboardProductsView",
    "DashboardInventoryView",
    "DashboardPaymentsView",
    "DashboardCustomersView",
    "DashboardReportsView",
    "DashboardActivityView",
    "DashboardNotificationsView",
    "DashboardOrderListView",

    "DashboardOrderDetailView",

    "DashboardOrderStatusUpdateView",

    "DashboardOrderStatsView",
]