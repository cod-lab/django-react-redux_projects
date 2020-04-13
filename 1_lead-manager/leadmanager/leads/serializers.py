# converting models into serializers(using 'serializers') to store it as json file
from rest_framework import serializers
from leads.models import Lead               #importing cls 'Lead' from file 'model.py' stored in dir 'leads'

# Lead Serializer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'                  #take all the fields of Lead