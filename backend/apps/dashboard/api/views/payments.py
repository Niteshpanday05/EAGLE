from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


from apps.dashboard.permissions import IsAdminUser

from apps.dashboard.services.payments import (
    DashboardPaymentsService
)

from ..serializers.payments import (
    DashboardPaymentsSerializer
)



class DashboardPaymentsView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsAdminUser,
    ]


    def get(self, request):

        data = (
            DashboardPaymentsService
            .execute()
        )


        serializer = DashboardPaymentsSerializer(
            data
        )


        return Response(
            serializer.data
        )