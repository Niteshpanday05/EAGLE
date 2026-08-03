from apps.dashboard.models import ActivityLog


class DashboardActivitySelector:
    """
    Activity log queries.
    """


    @classmethod
    def execute(cls, limit=20):

        return {

            "recent_activity":
                cls.get_recent_activity(limit)

        }


    @classmethod
    def get_recent_activity(cls, limit):

        logs = (

            ActivityLog.objects
            .select_related(
                "user"
            )
            [:limit]

        )


        return [

            {

                "id": log.id,

                "user":
                    (
                        log.user.email
                        if log.user
                        else "System"
                    ),

                "action":
                    log.action,

                "model":
                    log.model_name,

                "object_id":
                    log.object_id,

                "description":
                    log.description,

                "created_at":
                    log.created_at,

            }

            for log in logs

        ]