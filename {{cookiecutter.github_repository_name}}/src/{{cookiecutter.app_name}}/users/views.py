from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny

from {{cookiecutter.app_name}}.users.models import User
from {{cookiecutter.app_name}}.users.permissions import IsOwnerOrReadOnly
from {{cookiecutter.app_name}}.users.serializers import CreateUserSerializer, UserSerializer


class UserViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  viewsets.GenericViewSet):
    """
    Creates, Updates, and retrives User accounts
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsOwnerOrReadOnly,)

    def create(self, request, *args, **kwargs):
        self.serializer_class = CreateUserSerializer
        self.permission_classes = (AllowAny,)
        return super(UserViewSet, self).create(request, *args, **kwargs)