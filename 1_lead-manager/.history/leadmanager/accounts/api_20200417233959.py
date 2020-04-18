from rest_framework import generics, permissions
from rest_framework.response import Response        # used to send response from this 'api'
from knox.models import AuthToken                   # knox is used for tokens
from .serializers import UserSerializer,  RegisterSerializer            # imoprting from 'accounts/serializers.py'

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer()).data,
            "token": AuthToken.objects.create(user)
        })


