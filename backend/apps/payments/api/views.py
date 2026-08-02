from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from apps.payments.models import Payment

from apps.payments.services.payment_service import (
    PaymentService,
)


from .serializers import (
    InitiatePaymentSerializer,
    PaymentSerializer,
    RefundPaymentSerializer,
    VerifyPaymentSerializer,
)



class PaymentViewSet(viewsets.GenericViewSet):

    """
    Payment endpoints.
    """

    permission_classes = [
        IsAuthenticated,
    ]

    queryset = Payment.objects.all()



    def check_owner(
        self,
        payment,
        user,
    ):

        return payment.order.user == user



    # ======================================
    # Initiate Payment
    # ======================================


    @action(
        detail=False,
        methods=["post"],
        url_path="initiate",
    )
    def initiate(
        self,
        request,
    ):


        serializer = InitiatePaymentSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )


        payment = (
            PaymentService
            .get_payment_by_reference(
                serializer.validated_data[
                    "reference"
                ]
            )
        )


        if not self.check_owner(
            payment,
            request.user,
        ):

            return Response(
                {
                    "detail":
                    "Access denied."
                },
                status=status.HTTP_403_FORBIDDEN,
            )


        response = (
            PaymentService
            .initiate_payment(
                payment
            )
        )


        return Response(
            response,
            status=status.HTTP_200_OK,
        )



    # ======================================
    # Verify Payment
    # ======================================


    @action(
        detail=False,
        methods=["post"],
        url_path="verify",
    )
    def verify(
        self,
        request,
    ):


        serializer = VerifyPaymentSerializer(
            data=request.data
        )


        serializer.is_valid(
            raise_exception=True
        )


        payment = (
            PaymentService
            .get_payment_by_reference(
                serializer.validated_data[
                    "reference"
                ]
            )
        )


        if not self.check_owner(
            payment,
            request.user,
        ):

            return Response(
                {
                    "detail":
                    "Access denied."
                },
                status=403,
            )



        response = (
            PaymentService
            .verify_payment(
                payment,
                **serializer.validated_data,
            )
        )


        return Response(
            response
        )



    # ======================================
    # Refund
    # ======================================


    @action(
        detail=False,
        methods=["post"],
        url_path="refund",
    )
    def refund(
        self,
        request,
    ):


        serializer = RefundPaymentSerializer(
            data=request.data
        )


        serializer.is_valid(
            raise_exception=True
        )


        payment = (
            PaymentService
            .get_payment_by_reference(
                serializer.validated_data[
                    "reference"
                ]
            )
        )


        if not self.check_owner(
            payment,
            request.user,
        ):

            return Response(
                {
                    "detail":
                    "Access denied."
                },
                status=403,
            )


        response = (
            PaymentService
            .refund_payment(
                payment,
                amount=
                serializer.validated_data.get(
                    "amount"
                ),
            )
        )


        return Response(
            response
        )



    # ======================================
    # Payment Detail
    # ======================================


    @action(
        detail=False,
        methods=["get"],
        url_path="detail",
    )
    def detail(
        self,
        request,
    ):


        reference = request.query_params.get(
            "reference"
        )


        payment = (
            PaymentService
            .get_payment_by_reference(
                reference
            )
        )


        if not self.check_owner(
            payment,
            request.user,
        ):

            return Response(
                {
                    "detail":
                    "Access denied."
                },
                status=403,
            )


        serializer = PaymentSerializer(
            payment
        )


        return Response(
            serializer.data
        )