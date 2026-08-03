from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import (
    ActivityLog,
    Notification,
)


@admin.register(ActivityLog)
class ActivityLogAdmin(admin.ModelAdmin):

    list_display = (
        "user",
        "action",
        "model_name",
        "created_at",
    )

    readonly_fields = (
        "created_at",
    )


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "notification_type",
        "is_read",
        "created_at",
    )

    list_filter = (
        "notification_type",
        "is_read",
    )

    readonly_fields = (
        "created_at",
    )