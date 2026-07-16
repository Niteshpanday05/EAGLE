from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from accounts.api.serializers.user import UserSerializer


class MeView(RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user