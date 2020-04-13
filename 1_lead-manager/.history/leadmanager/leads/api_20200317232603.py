from rest_framework import viewsets, permissions
from leads.models import Lead                       #from .models import Lead
from leads.serializers import LeadSerializer

# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny            #permissoin will be changed later to allow user to see his leads only
    ]
    serializer_class = LeadSerializer