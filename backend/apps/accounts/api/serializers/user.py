from rest_framework import serializers

from apps.accounts.models import User


class UserSerializer(serializers.ModelSerializer):

    full_name = serializers.ReadOnlyField()

    class Meta:
        model = User

        fields = (
            "id",
            "email",
            "first_name",
            "last_name",
            "full_name",
            "phone",
            "avatar",
            "is_verified",
        )

        read_only_fields = (
            "id",
            "is_verified",
        )