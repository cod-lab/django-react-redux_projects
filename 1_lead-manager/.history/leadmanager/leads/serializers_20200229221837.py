# converting models to json file
from rest_framework import serializers
from leads.models import Lead               #importing cls 'Lead' from file 'model.py' in dir 'leads'

# Lead Serializer
class LeadSerializer(serializeres.ModelSerializer):


