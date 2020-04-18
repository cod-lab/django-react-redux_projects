from rest_framework import serializers
from django.contrib.auth.models import User                 # django already has a user model and all the authentication stuff, we just using knox for tokens
from django.contrib.auth import authenticate

# User Serialzer                                            # similar to lead serializer(leadmanager/leads/serializers.py) 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email')

# Register Serialzer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email','password')
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):                       # this func validates username, pass, email
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        # its gonna check and validate the data input according to django user model structure ('cz we are using this model)

        return user                                         # return created user

# Login Serialzer
