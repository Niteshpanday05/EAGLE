from django.urls import path

from .views import (
    DashboardOverviewView,
    DashboardAnalyticsView,
   
    DashboardProductsView,
    DashboardInventoryView,
    DashboardPaymentsView,
    DashboardCustomersView,
    DashboardReportsView,
    DashboardActivityView,
    DashboardNotificationsView,
      
)

from .views import (
    DashboardOrderListView,
    DashboardOrderDetailView,
    DashboardOrderStatusUpdateView,
    DashboardOrderStatsView,
)


urlpatterns = [

    path(
        "overview/",
        DashboardOverviewView.as_view(),
    ),

    path(
        "analytics/",
        DashboardAnalyticsView.as_view(),
    ),
     path(
        "orders/",
        DashboardOrderListView.as_view(),
        name="dashboard-orders",
    ),

    path(
        "orders/<uuid:pk>/",
        DashboardOrderDetailView.as_view(),
        name="dashboard-order-detail",
    ),


    path(
        "orders/<uuid:pk>/status/",
        DashboardOrderStatusUpdateView.as_view(),
        name="dashboard-order-status",
    ),


    path(
        "orders/stats/",
        DashboardOrderStatsView.as_view(),
        name="dashboard-order-stats",
    ),

    path(
        "products/",
        DashboardProductsView.as_view(),
    ),

    path(
        "inventory/",
        DashboardInventoryView.as_view(),
    ),

    path(
        "payments/",
        DashboardPaymentsView.as_view(),
    ),

    path(
        "customers/",
        DashboardCustomersView.as_view(),
    ),

    path(
        "reports/",
        DashboardReportsView.as_view(),
    ),

    path(
        "activity/",
        DashboardActivityView.as_view(),
    ),

    path(
        "notifications/",
        DashboardNotificationsView.as_view(),
    ),

]