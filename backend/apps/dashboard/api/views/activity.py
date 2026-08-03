from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


from apps.dashboard.permissions import IsAdminUser

from apps.dashboard.services.activity import (
    DashboardActivityService
)

from ..serializers.activity import (
    DashboardActivitySerializer
)



class DashboardActivityView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsAdminUser,
    ]


    def get(self, request):

        data = (
            DashboardActivityService
            .execute()
        )


        serializer = DashboardActivitySerializer(
            data
        )


        return Response(
            serializer.data
        )