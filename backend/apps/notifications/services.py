from .models import Notification



class NotificationService:


    @staticmethod
    def create_notification(
        *,
        notification_type,
        title,
        message,
        notification_key=None,
    ):


        if notification_key:

            existing = Notification.objects.filter(
                notification_key=notification_key
            ).exists()


            if existing:

                return None



        return Notification.objects.create(

            type=notification_type,

            title=title,

            message=message,

            notification_key=notification_key,

        )