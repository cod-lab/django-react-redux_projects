from rest_framework import generics, permissions
from rest_framework.response import Response                            # used to send response from this 'api'
from knox.models import AuthToken                                       # knox is used for tokens
from .serializers import UserSerializer,  RegisterSerializer            # imoprting from 'accounts/serializers.py'

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
    # when we make a request to register user on web, all the data(username,email,pass,headers,etc.) we send from web will be here
        serializer = self.get_serializer(data=request.data)             # variable 'serializer' takes in the requested data and pass it to 'RegisterSerializer'
        serializer.is_valid(raise_exception=True)                       # now we check the serializer is valid and send back any err if needed by raising exception
        user = serializer.save()                                        # it saves the user in db

        return Response({                                               # inside response will be the object having dictionary which we'll send
        # send our response back which we imported above from 'rest_framework'
            "user": UserSerializer(user, context=self.get_serializer()).data,
            # passing user object to 'key' 'user'
            # user = user object
            # .data = gives the serialized user
            "token": AuthToken.objects.create(user)[0]
            # just like when user login, when he registers he also gets a token, so to login immediately
            # using 'AuthToken' which we imported above from 'knox'
            # AuthToken.objects.create(user) = it'll create the token specific to that user, so when user makes any request from frontend, its gonna know who the user is from that token
            # that token goes in header in authorization part 
        })
