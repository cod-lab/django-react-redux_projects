# converting models into serializers(using 'serializers') to store it as json file
from rest_framework import serializers
from leads.models import Lead               #importing cls 'Lead' from file 'model.py' in dir 'leads'

# Lead Serializer
class LeadSerializer(serializeres.ModelSerializer):


