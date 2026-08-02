import logging
from typing import Any

import stripe

from django.conf import settings

from apps.payments.models import Payment

from .base_gateway import BaseGateway


logger = logging.getLogger(__name__)


class StripeService(BaseGateway):
    """
    Stripe payment gateway integration.

    Uses Stripe Checkout Session.
    """


    gateway_name = "STRIPE"



    def __init__(self):

        stripe.api_key = (
            settings.STRIPE_SECRET_KEY
        )


    # =====================================
    # Create Checkout Session
    # =====================================

    def initiate(
        self,
        payment: Payment,
    ) -> dict[str, Any]:


        logger.info(
            "Creating Stripe checkout session: %s",
            payment.reference,
        )


        try:


            session = stripe.checkout.Session.create(

                mode="payment",

                payment_method_types=[
                    "card"
                ],


                line_items=[

                    {

                        "price_data": {

                            "currency":
                                payment.currency.lower(),


                            "product_data": {

                                "name":
                                    f"Order {payment.order.order_number}",

                            },


                            "unit_amount":
                                int(
                                    payment.amount * 100
                                ),

                        },


                        "quantity":1,

                    }

                ],


                metadata={

                    "payment_reference":
                        payment.reference,

                    "order_id":
                        str(payment.order.id),

                },


                success_url=
                    settings.STRIPE_SUCCESS_URL,


                cancel_url=
                    settings.STRIPE_CANCEL_URL,

            )



            return {

                "success": True,


                "payment_url":
                    session.url,


                "gateway_payment_id":
                    session.id,


                "gateway_response":
                    session,

            }



        except Exception as error:


            logger.exception(
                "Stripe checkout error"
            )


            return {

                "success":False,

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


        session_id = kwargs.get(
            "session_id"
        )


        if not session_id:

            return {

                "success":False,

                "message":
                    "Stripe session id missing",

            }



        try:


            session = (
                stripe.checkout.Session.retrieve(
                    session_id
                )
            )


            if session.payment_status == "paid":


                return {

                    "success":True,


                    "transaction_id":
                        session.payment_intent,


                    "gateway_payment_id":
                        session.id,


                    "gateway_response":
                        session,

                }



            return {

                "success":False,

                "message":
                    "Payment not completed",

                "gateway_response":
                    session,

            }



        except Exception as error:


            logger.exception(
                "Stripe verification error"
            )


            return {

                "success":False,

                "message":
                    str(error),

            }



    # =====================================
    # Refund
    # =====================================

    def refund(
        self,
        payment: Payment,
        amount=None,
    ) -> dict[str, Any]:


        try:


            refund = stripe.Refund.create(

                payment_intent=
                    payment.transaction_id,


                amount=
                    int(amount * 100)
                    if amount
                    else None,

            )


            return {

                "success":True,

                "refund_id":
                    refund.id,


                "gateway_response":
                    refund,

            }



        except Exception as error:


            logger.exception(
                "Stripe refund error"
            )


            return {

                "success":False,

                "message":
                    str(error),

            }



    # =====================================
    # Webhook Verification
    # =====================================

    def webhook(
        self,
        payload: dict[str, Any],
        signature=None,
    ) -> dict[str, Any]:


        try:

            event = stripe.Webhook.construct_event(

                payload,

                signature,

                settings.STRIPE_WEBHOOK_SECRET,

            )


            return {

                "success":True,

                "event":
                    event,

            }


        except Exception as error:


            return {

                "success":False,

                "message":
                    str(error),

            }