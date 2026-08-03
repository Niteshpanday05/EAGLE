from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


from apps.dashboard.permissions import IsAdminUser

from apps.dashboard.services.notifications import (
    DashboardNotificationsService
)


from ..serializers.notifications import (
    DashboardNotificationsSerializer
)



class DashboardNotificationsView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsAdminUser,
    ]


    def get(self, request):

        data = (
            DashboardNotificationsService
            .execute()
        )


        serializer = DashboardNotificationsSerializer(
            data
        )


        return Response(
            serializer.data
        )