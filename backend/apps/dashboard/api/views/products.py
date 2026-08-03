from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from apps.dashboard.permissions import IsAdminUser

from apps.dashboard.services.products import (
    DashboardProductsService
)

from ..serializers.products import (
    DashboardProductsSerializer
)



class DashboardProductsView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsAdminUser,
    ]


    def get(self, request):

        data = (
            DashboardProductsService
            .execute()
        )


        serializer = DashboardProductsSerializer(
            data
        )


        return Response(
            serializer.data
        )