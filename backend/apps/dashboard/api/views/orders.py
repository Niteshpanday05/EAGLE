from django.db.models import Sum
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView

from apps.orders.models import Order

from ..serializers.orders import (
    DashboardOrderSerializer,
    OrderStatusUpdateSerializer,
)

class DashboardOrderListView(ListAPIView):
    """
    Admin order list
    """

    permission_classes = [IsAdminUser]

    serializer_class = DashboardOrderSerializer

    filter_backends = [
        DjangoFilterBackend,
    ]

    filterset_fields = [
        "status",
        "payment_status",
    ]

    queryset = (
        Order.objects
        .select_related(
            "user",
            "payment",
        )
        .prefetch_related(
            "items__product"
        )
        .order_by("-created_at")
    )



class DashboardOrderDetailView(RetrieveAPIView):
    """
    Admin order detail
    """

    permission_classes = [IsAdminUser]

    serializer_class = DashboardOrderSerializer

    queryset = (
        Order.objects
        .select_related(
            "user",
            "payment",
        )
        .prefetch_related(
            "items__product"
        )
    )



class DashboardOrderStatusUpdateView(APIView):
    """
    Change order status
    """

    permission_classes = [IsAdminUser]


    def patch(self, request, pk):

        order = Order.objects.get(pk=pk)

        serializer = OrderStatusUpdateSerializer(
            order,
            data=request.data,
            partial=True
        )

        serializer.is_valid(
            raise_exception=True
        )

        serializer.save()


        return Response(
            {
                "message": "Order status updated",
                "order": serializer.data,
            },
            status=status.HTTP_200_OK
        )



class DashboardOrderStatsView(APIView):
    """
    Order analytics cards
    """

    permission_classes = [IsAdminUser]


    def get(self, request):

        data = {

            "total_orders":
                Order.objects.count(),


            "pending_orders":
                Order.objects.filter(
                    status="pending"
                ).count(),


            "completed_orders":
                Order.objects.filter(
                    status="delivered"
                ).count(),


            "cancelled_orders":
                Order.objects.filter(
                    status="cancelled"
                ).count(),


            "total_sales":
                Order.objects.filter(
                    status="delivered"
                )
                .aggregate(
                    total=Sum("total_amount")
                )["total"] or 0,

        }


        return Response(data)