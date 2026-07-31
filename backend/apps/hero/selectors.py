print("selectors.py loaded")

from .models import Hero


def get_active_heroes():
    print("get_active_heroes exists")
    return Hero.objects.all()