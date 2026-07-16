from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class RegisterSerializer(serializers.Serializer):

    first_name = serializers.CharField(max_length=100)

    last_name = serializers.CharField(max_length=100)

    email = serializers.EmailField()

    password = serializers.CharField(
        write_only=True,
        min_length=8,
    )

    confirm_password = serializers.CharField(
        write_only=True,
    )

    def validate_email(self, value):

        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError(
                "Email already exists."
            )

        return value

    def validate(self, attrs):

        if attrs["password"] != attrs["confirm_password"]:
            raise serializers.ValidationError(
                {
                    "confirm_password":
                    "Passwords do not match."
                }
            )

        return attrs