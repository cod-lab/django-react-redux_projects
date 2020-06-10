from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class CommentSerializer(serializers.Serializer):
	email = serializers.EmailField()
	content = serializers.CharField(max_length=200)
	created = serializers.DateTimeField()

	def create(self, validated_data):
		#return Comment(**validated_data)
		print(validated_data)

obj1=CommentSerializer()
obj1.create("a@b.com","adad")
