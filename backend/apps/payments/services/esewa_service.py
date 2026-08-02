import logging
from typing import Any

import requests

from django.conf import settings

from apps.payments.models import Payment

from .base_gateway import BaseGateway


logger = logging.getLogger(__name__)


class EsewaService(BaseGateway):
    """
    eSewa payment gateway integration.

    Handles:
    - Payment initiation
    - Payment verification
    - Refund processing
    """

    gateway_name = "ESEWA"


    def __init__(self):

        self.merchant_code = (
            settings.ESEWA_MERCHANT_CODE
        )

        self.secret_key = (
            settings.ESEWA_SECRET_KEY
        )

        self.base_url = (
            settings.ESEWA_BASE_URL
        )


    # =====================================
    # Initiate Payment
    # =====================================

    def initiate(
        self,
        payment: Payment,
    ) -> dict[str, Any]:

        logger.info(
            "eSewa payment initiation: %s",
            payment.reference,
        )


        payload = {

            "amount":
                str(payment.amount),

            "tax_amount":
                "0",

            "total_amount":
                str(payment.amount),

            "transaction_uuid":
                payment.reference,

            "product_code":
                self.merchant_code,

            "product_service_charge":
                "0",

            "product_delivery_charge":
                "0",

            "success_url":
                settings.ESEWA_SUCCESS_URL,

            "failure_url":
                settings.ESEWA_FAILURE_URL,

        }


        try:

            response = requests.post(

                f"{self.base_url}/api/epay/main/v2/form",

                data=payload,

                timeout=15,

            )


            return {

                "success": True,

                "payment_url":
                    f"{self.base_url}/api/epay/main/v2/form",

                "gateway_payment_id":
                    payment.reference,

                "gateway_response":
                    payload,

            }


        except requests.RequestException as error:


            logger.exception(
                "eSewa initiation error"
            )


            return {

                "success": False,

                "message":
                    str(error),

                "gateway_response":
                    {},

            }



    # =====================================
    # Verify Payment
    # =====================================

    def verify(
        self,
        payment: Payment,
        **kwargs,
    ) -> dict[str, Any]:


        transaction_uuid = kwargs.get(
            "transaction_uuid",
            payment.reference,
        )


        logger.info(
            "eSewa verification: %s",
            transaction_uuid,
        )


        payload = {

            "product_code":
                self.merchant_code,

            "total_amount":
                str(payment.amount),

            "transaction_uuid":
                transaction_uuid,

        }


        try:

            response = requests.get(

                f"{self.base_url}/api/epay/transaction/status/",

                params=payload,

                timeout=15,

            )


            data = response.json()



            if data.get(
                "status"
            ) == "COMPLETE":


                return {

                    "success": True,

                    "transaction_id":
                        data.get(
                            "transaction_code"
                        ),

                    "gateway_payment_id":
                        transaction_uuid,

                    "gateway_response":
                        data,

                }



            return {

                "success": False,

                "message":
                    data.get(
                        "status",
                        "Payment verification failed",
                    ),

                "gateway_response":
                    data,

            }



        except requests.RequestException as error:


            logger.exception(
                "eSewa verification error"
            )


            return {

                "success": False,

                "message":
                    str(error),

                "gateway_response":
                    {},

            }



    # =====================================
    # Refund
    # =====================================

    def refund(
        self,
        payment: Payment,
        amount=None,
    ) -> dict[str, Any]:

        """
        eSewa refund API depends on merchant agreement.

        Keep this method ready for future implementation.
        """


        return {

            "success": False,

            "message":
                "eSewa refund not implemented",

            "gateway_response":
                {},

        }



    # =====================================
    # Helpers
    # =====================================

    def headers(self):

        return {

            "Content-Type":
                "application/json",

        }