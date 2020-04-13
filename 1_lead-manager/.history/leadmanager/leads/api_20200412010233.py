from rest_framework import viewsets, permissions
from leads.models import Lead                           # from .models import Lead
from leads.serializers import LeadSerializer

# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()                     # gives all the leads, so commenting this line
    permission_classes = [
        permissions.AllowAny                            # permissoin will be changed later to allow user to see his leads only
    ]
    
    def get_queryset(self):
        return self.request.user.leads.all()            # it'll only going to get the leads associated with that  user
    
    serializer_class = LeadSerializer