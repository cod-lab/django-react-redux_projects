from rest_framework import generics, permissions
from rest_framework.response import Response        # used to send response from this 'api'
from knox.models import AuthToken                   # knox is used for tokens
from .serializers import UserSerializer,  RegisterSerializer            # imoprting from 'accounts/serializers.py'