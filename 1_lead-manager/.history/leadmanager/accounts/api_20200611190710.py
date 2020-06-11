from rest_framework import generics, permissions
from rest_framework.response import Response                            # used to send response from this 'api'
from knox.models import AuthToken                                       # knox is used for tokens
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
# importing serializers 'UserSerializer', 'RegiterSerializer', 'LoginSerializer' from 'serializer'(leadmanager/accounts/serializers.py)

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer                               # calling 'RegisterSerializer' from 'serializer'(leadmanager/accounts/serializers.py)

    def post(self, request, *args, **kwargs):
    # when we make a request to register user on web, all the data(username,email,pass,headers,etc.) we send from web will be here
        serializer = self.get_serializer(data=request.data)             # variable 'serializer' takes in the requested data and pass it to 'RegisterSerializer'
        serializer.is_valid(raise_exception=True)
        # now we check the data in variable 'serializer' is semantically(not authentically) valid and send back any err if needed by raising exception
        # taking serialized data from serializer and deserializing it
        # is_valid() = when deserializing, always need to call 'is_valid' before attempting to access validated data
        user = serializer.save()                                        # user object
        # it calls 'RegisterSerializer' from 'serializer'(leadmanager/accounts/serializers.py) & executes it and,
        # fn 'create' in 'serializer' 'RegisterSerializer' in file 'leadmanager/accounts/serializers.py' executes & returns here the above passed user data in form of user object
        # save() = run 'insert' db cmd to save the user object in db and data in other fields which are created but not given any data by user (like 'id')
        # now the object saved in db will be stored into variable 'user' too

        return Response({
        # return(send) user data and generated token to 'app' 'frontend'(leadmanager/frontend/)
        # inside 'Response' will be the object having dictionary which we'll send
        # send our response back which we imported above from 'rest_framework'
        # we can also send other stuff in 'Response'
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # calling 'UserSerializer' from 'serializer'(leadmanager/accounts/serializers.py) and,
            # ('user', = passing object 'user' (having details: uname,email,pass) to it and,
            # getting back user details(id,uname,email)(as defined in 'UserSerializer') from 'UserSerializer' and,
            # get_serializer_context() = Returns a dictionary containing any extra context that should be supplied to the serializer.
            # .'data' = a method of 'serializer' converting all the data to serialized data (json format)
            # passing serialized(json format) user details to 'dict-key' 'user'
            "token": AuthToken.objects.create(user)[1]
            # just like when user login, when he registers he also gets a token, so to login    automatically     immediately
            # using 'AuthToken' which we imported above from 'knox'
            # AuthToken.objects.create(user) = passing object 'user' to 'AuthToken', now it'll create the token specific to that user, so when user makes any request from frontend, its gonna know who the user is from that token
            # AuthToken.objects.create() returns a tuple (instance,token), so in order to get token use the index [1]
            # that token goes in header in authorization part
        })

# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer                                  # calling 'LoginSerializer' from 'serializer'(leadmanager/accounts/serializers.py)

    def post(self, request, *args, **kwargs):
    # when we make a request to login user on web, all the data(username,pass) we send from web will be here
        serializer = self.get_serializer(data=request.data)             # variable 'serializer' takes in the requested data and pass it to 'LoginSerializer'
        serializer.is_valid(raise_exception=True)
        # now we check the data in variable 'serializer' is semantically(not authentically) valid and send back any err if needed by raising exception
        # taking serialized data from serializer and deserializing it
        # is_valid() = when deserializing, always need to call 'is_valid' before attempting to access validated data
        user = serializer.validated_data                                # user object
        # 'serializer'. = it calls 'LoginSerializer' from 'serializer'(leadmanager/accounts/serializers.py) & executes it and,
        # fn 'validate' in 'serializer' 'LoginSerializer' in file 'leadmanager/accounts/serializers.py' executes & returns here the above passed user data(unm,encrypted pass)
        # validated_data = an inbuilt property that holds dict, takes in this data and convert it to dict
        # now this data will be stored into variable 'user'

        return Response({
        # return(send) user data and newly generated token(each time when user login) to 'app' 'frontend'(leadmanager/frontend/)
        # inside 'Response' will be the object having dictionary which we'll send
        # send our response back which we imported above from 'rest_framework'
        # we can also send other stuff in 'Response'
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # calling 'UserSerializer' from 'serializer'(leadmanager/accounts/serializers.py) and,
            # ('user', = passing object 'user' (having details: uname,pass) to it and,
            # getting back user details(id,uname,email)(as defined in 'UserSerializer') from 'UserSerializer' and,
            # get_serializer_context() = Returns a dictionary containing any extra context that should be supplied to the serializer.
            # .'data' = a method of 'serializer' converting all the data to serialized data (json format)
            # passing serialized(json format) user details to 'dict-key' 'user'
            "token": AuthToken.objects.create(user)[1]
            # when a user login, a token is generated which is associated to that user only
            # that token is only valid for the period user has logged in
            # using 'AuthToken' which we imported above from 'knox'
            # AuthToken.objects.create(user) = passing object 'user' to 'AuthToken', now it'll create the token specific to that user, so when user makes any request from frontend, its gonna know who the user is from that token
            # AuthToken.objects.create() returns a tuple (instance,token), so in order to get token use the index [1]
            # that token goes in header in authorization part
        })
        # return Response({"user": LoginSerializer(user).data})

# GET User API
class UserAPI(generics.RetrieveAPIView):                                # it gets user through token associated to him, it gives readonly info.
    permission_classes = [permissions.IsAuthenticated]                  # it ptotects the route i.e. it must have a valid token to return a user and get things accessed
    
    serializer_class = UserSerializer                                   # calling 'UserSerializer' from 'serializer'(leadmanager/accounts/serializers.py)

    def get_object(self):                                               # we use method 'get_object' bcz we want to return the user
        
