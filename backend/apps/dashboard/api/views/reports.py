from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


from apps.dashboard.permissions import IsAdminUser

from apps.dashboard.services.reports import (
    DashboardReportsService
)

from ..serializers.reports import (
    DashboardReportsSerializer
)



class DashboardReportsView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsAdminUser,
    ]


    def get(self, request):

        data = (
            DashboardReportsService
            .execute()
        )


        serializer = DashboardReportsSerializer(
            data
        )


        return Response(
            serializer.data
        )