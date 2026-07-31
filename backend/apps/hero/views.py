from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from .serializers import HeroSerializer
from .services import list_heroes


class HeroListAPIView(generics.ListAPIView):
    serializer_class = HeroSerializer

    def get_queryset(self):
        return list_heroes()