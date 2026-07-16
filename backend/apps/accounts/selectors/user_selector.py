from typing import Optional

from django.contrib.auth import get_user_model
from django.db.models import QuerySet

User = get_user_model()


class UserSelector:

    @staticmethod
    def get_by_id(user_id: int) -> Optional[User]:
        try:
            return User.objects.get(id=user_id)
        except User.DoesNotExist:
            return None

    @staticmethod
    def get_by_email(email: str) -> Optional[User]:
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            return None

    @staticmethod
    def active_users() -> QuerySet:
        return User.objects.filter(is_active=True)

    @staticmethod
    def verified_users() -> QuerySet:
        return User.objects.filter(
            is_active=True,
            is_verified=True,
        )