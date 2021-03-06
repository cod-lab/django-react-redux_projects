from rest_framework import viewsets, permissions
from leads.models import Lead                           # from .models import Lead
from leads.serializers import LeadSerializer
from rest_framework import viewsets, permissions

# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()                     # gives all the leads, so commenting this line
    permission_classes = [
        # permissions.AllowAny                          # gives permission to any user, so commenting this line
        permissions.IsAuthenticated                     # gives permission to authenticated user only
    ]

    serializer_class = LeadSerializer
    
    def get_queryset(self):
        return self.request.user.leads.all()            # it'll only going to get the leads associated with that user

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)        # it'll save the lead owner when we create a lead
 