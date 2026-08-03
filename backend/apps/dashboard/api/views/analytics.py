from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.dashboard.permissions import IsAdminUser
from apps.dashboard.services.analytics import DashboardAnalyticsService

from ..serializers.analytics import DailySalesSerializer


class DashboardAnalyticsView(APIView):
    """
    Dashboard sales analytics.
    """

    permission_classes = [
        IsAuthenticated,
        IsAdminUser,
    ]

    def get(self, request):
        days = int(request.query_params.get("days", 30))

        analytics = DashboardAnalyticsService.get_daily_sales(days)

        serializer = DailySalesSerializer(
            analytics,
            many=True,
        )

        return Response(serializer.data)