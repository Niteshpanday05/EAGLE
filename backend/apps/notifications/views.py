from django.shortcuts import render

# Create your views here.
from rest_framework.generics import ListAPIView

from .models import Notification
from .serializers import NotificationSerializer



class NotificationListView(ListAPIView):


    serializer_class = NotificationSerializer


    queryset = Notification.objects.all()[:10]