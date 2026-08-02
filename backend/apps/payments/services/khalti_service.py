import logging
from typing import Any

import requests
from django.conf import settings

from apps.payments.models import Payment

from .base_gateway import BaseGateway


logger = logging.getLogger(__name__)


class KhaltiService(BaseGateway):
    """
    Khalti payment gateway integration.

    Handles:
    - Payment initiation
    - Payment verification
    - Refunds
    """


    gateway_name = "KHALTI"


    def __init__(self):

        self.secret_key = (
            settings.KHALTI_SECRET_KEY
        )

        self.base_url = (
            settings.KHALTI_BASE_URL
        )



    # =====================================
    # Initiate Payment
    # =====================================

    def initiate(
        self,
        payment: Payment,
    ) -> dict[str, Any]:


        logger.info(
            "Initiating Khalti payment %s",
            payment.reference,
        )


        payload = {

            "return_url":
                settings.KHALTI_RETURN_URL,


            "website_url":
                settings.FRONTEND_URL,


            "amount":
                int(payment.amount * 100),


            "purchase_order_id":
                payment.reference,


            "purchase_order_name":
                f"Order {payment.order.order_number}",


        }



        try:

            response = requests.post(

                f"{self.base_url}/epayment/initiate/",

                json=payload,

                headers=self.headers(),

                timeout=15,

            )


            data = response.json()



            if response.status_code != 200:

                return {

                    "success": False,

                    "message":
                        data.get(
                            "detail",
                            "Khalti initiation failed"
                        ),

                    "response":
                        data,

                }



            return {

                "success": True,

                "payment_url":
                    data.get(
                        "payment_url"
                    ),

                "gateway_payment_id":
                    data.get(
                        "pidx"
                    ),

                "response":
                    data,

            }



        except Exception as e:


            logger.exception(
                "Khalti initiate error"
            )


            return {

                "success":False,

                "message":str(e),

            }



    # =====================================
    # Verify Payment
    # =====================================


    def verify(
        self,
        payment: Payment,
        **kwargs,
    ) -> dict[str, Any]:


        pidx = kwargs.get(
            "pidx"
        )


        if not pidx:

            return {

                "success":False,

                "message":
                    "Missing Khalti pidx",

            }



        try:


            response = requests.post(

                f"{self.base_url}/epayment/lookup/",

                json={
                    "pidx":pidx
                },

                headers=self.headers(),

                timeout=15,

            )


            data=response.json()



            if data.get(
                "status"
            ) == "Completed":


                return {

                    "success":True,

                    "transaction_id":
                        data.get(
                            "transaction_id"
                        ),

                    "gateway_payment_id":
                        pidx,

                    "response":
                        data,

                }



            return {

                "success":False,

                "message":
                    data.get(
                        "status"
                    ),

                "response":
                    data,

            }



        except Exception as e:


            logger.exception(
                "Khalti verification failed"
            )


            return {

                "success":False,

                "message":str(e),

            }



    # =====================================
    # Refund
    # =====================================


    def refund(
        self,
        payment: Payment,
        amount=None,
    ) -> dict[str, Any]:


        return {

            "success":False,

            "message":
                "Khalti refund API not configured",

        }



    # =====================================
    # Helpers
    # =====================================


    def headers(self):

        return {

            "Authorization":
                f"Key {self.secret_key}",

            "Content-Type":
                "application/json",

        }