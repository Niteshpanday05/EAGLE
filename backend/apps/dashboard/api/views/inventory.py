from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from apps.dashboard.permissions import IsAdminUser

from apps.dashboard.services.inventory import (
    DashboardInventoryService
)

from ..serializers.inventory import (
    DashboardInventorySerializer
)



class DashboardInventoryView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsAdminUser,
    ]


    def get(self, request):

        data = (
            DashboardInventoryService
            .execute()
        )


        serializer = DashboardInventorySerializer(
            data
        )


        return Response(
            serializer.data
        )