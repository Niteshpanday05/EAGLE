from django.db import models


class PaymentMethod(models.TextChoices):
    COD = "COD", "Cash on Delivery"
    KHALTI = "KHALTI", "Khalti"
    ESEWA = "ESEWA", "eSewa"
    STRIPE = "STRIPE", "Stripe"

class PaymentStatus(models.TextChoices):
    PENDING = "PENDING", "Pending"
    PROCESSING = "PROCESSING", "Processing"
    SUCCESS = "SUCCESS", "Success"
    FAILED = "FAILED", "Failed"
    CANCELLED = "CANCELLED", "Cancelled"
    REFUNDED = "REFUNDED", "Refunded"


class Currency(models.TextChoices):
    NPR = "NPR", "Nepalese Rupee"
    USD = "USD", "US Dollar"