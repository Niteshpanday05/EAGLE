from django.db import models

# Create your models here.
from django.db import models

from .choices import NotificationType



class Notification(models.Model):


    type = models.CharField(

        max_length=50,

        choices=NotificationType.choices

    )
    notification_key = models.CharField(
        max_length=255,
        unique=True,
        null=True,
        blank=True,
    )


    title = models.CharField(

        max_length=255

    )


    message = models.TextField()



    is_read = models.BooleanField(

        default=False

    )



    created_at = models.DateTimeField(

        auto_now_add=True

    )



    class Meta:

        ordering = [

            "-created_at"

        ]



    def __str__(self):

        return self.title