from rest_framework import serializers

from .models import Hero


class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = (
            "id",
            "badge",
            "title",
            "subtitle",
            "description",
            "image",
            "primary_button_text",
            "primary_button_url",
            "secondary_button_text",
            "secondary_button_url",
        )