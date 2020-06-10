from rest_framework import serializers
from django.contrib.auth.models import User                 # django already has a user model and all the authentication stuff, we just using knox for tokens
from django.contrib.auth import authenticate

# User Serialzer                                            # similar to lead serializer(leadmanager/leads/serializers.py) 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User                                        # receives object 'user' from 'api' 'RegisterAPI' OR 'LoginAPI' stored in file 'leadmanager/accounts/api.py'
        fields = ('id','username','email')                  # these are the fields which are sent when this 'serializer' is called

# Register Serialzer
class RegisterSerializer(serializers.ModelSerializer):      # we used 'ModelSerializer' to create model
    class Meta:
        model = User                                        
        # receives user details from 'api' 'RegisterAPI' stored in file 'leadmanager/accounts/api.py'
            # create model, entry of new user in table '' in db
        fields = ('id','username','email','password') # these are the fields which are sent when this 'serializer' is called
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
    # 'validated_data' is an inbuilt property that holds the dict (bydefault) containg user data which is sent by 'api' 'RegisterAPI' stored in file 'leadmanager/accounts/api.py'
        # this func validates username, email, pass
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        # create_user() = create an object of class 'User'(django inbuilt model class imported above) and,
        # add(pass) user's enetered details (dict) in this object
        # now this object will be stored in variable 'user'    
            # its gonna check and validate the data input according to django user model structure ('cz we are using this model)

        return user
        # return variable 'user' to whoever calls this 'serializer'
        # here it is sending 'user' to 'api' 'RegisterAPI' stored in file 'leadmanager/accounts/api.py'

# Login Serialzer
class LoginSerializer(serializers.Serializer):
# here, we didnt use 'ModelSerializer' bcz we are not creating a model, we are just validating that a user is authenticated or not by checking his credentials
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
    # (,'data') = getting user entered data at the time of login
        user = authenticate(**data)        
        # using 'authenticate' which we imported above from 'django.contrib.auth' to verify credentials. 
        # It takes user credentials and checks them against each 'authentication backend', and returns a user object(unm,encrypted pass) if the credentials are valid
        # django maintains a list of “authentication backends” that it checks for authentication one by one.
        
        if user and user.is_active: # if user is found & active
        # this is all included by django bydefault so we dont hv to write down any validation conditions
        # if user's 'is_active' 'field' is set to false then 'authentication backends' prohibits these users from authenticating
        # If a custom user model doesn’t have an is_active field, all users will be allowed to authenticate.
            return user                                     # if credentials are valid then return user object(unm,encrypted pass)
        raise serializers.ValidationError("Incorrect Credentials")          # else raise err 'Incorrect Credentials'
