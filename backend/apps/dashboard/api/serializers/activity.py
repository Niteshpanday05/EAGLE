from rest_framework import serializers



class ActivityLogSerializer(serializers.Serializer):

    id = serializers.IntegerField()

    user = serializers.CharField()

    action = serializers.CharField()

    model = serializers.CharField()

    object_id = serializers.CharField()

    description = serializers.CharField()

    created_at = serializers.DateTimeField()



class DashboardActivitySerializer(serializers.Serializer):

    recent_activity = ActivityLogSerializer(
        many=True
    )