from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.dashboard.permissions import IsAdminUser
from apps.dashboard.services import DashboardOverviewService

from ..serializers.overview import DashboardOverviewSerializer


class DashboardOverviewView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsAdminUser,
    ]

    def get(self, request):
        overview = DashboardOverviewService.execute()

        serializer = DashboardOverviewSerializer(overview)

        return Response(serializer.data)