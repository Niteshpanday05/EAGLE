from apps.dashboard.models import Notification


class DashboardNotificationsSelector:
    """
    Notification dashboard queries.
    """


    @classmethod
    def execute(cls):

        return {

            "total":
                cls.total_notifications(),


            "unread":
                cls.unread_notifications(),


            "recent":
                cls.recent_notifications(),

        }



    @classmethod
    def total_notifications(cls):

        return Notification.objects.count()



    @classmethod
    def unread_notifications(cls):

        return Notification.objects.filter(
            is_read=False
        ).count()



    @classmethod
    def recent_notifications(cls):

        notifications = (
    Notification.objects
    .order_by("-created_at")[:20]
)


        return [

            {

                "id": notification.id,

                "type":
                    notification.notification_type,

                "title":
                    notification.title,

                "message":
                    notification.message,

                "is_read":
                    notification.is_read,

                "created_at":
                    notification.created_at,

            }

            for notification in notifications

        ]