from rest_framework import serializers



class NotificationItemSerializer(serializers.Serializer):

    id = serializers.IntegerField()

    type = serializers.CharField()

    title = serializers.CharField()

    message = serializers.CharField()

    is_read = serializers.BooleanField()

    created_at = serializers.DateTimeField()



class DashboardNotificationsSerializer(serializers.Serializer):

    total = serializers.IntegerField()

    unread = serializers.IntegerField()

    recent = NotificationItemSerializer(
        many=True
    )