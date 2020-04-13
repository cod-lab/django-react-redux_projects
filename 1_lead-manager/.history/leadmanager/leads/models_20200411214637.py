from django.db import models
from django.contrib.auth.models import User                             # user model

# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
    # foreign key for connecting to table/model 'User' to table/model 'Lead'
    # User => table/model 'User'
    # related_name="leads" => its the common field btw those two tables (point of connection)
    # on_delete=models.CASCADE => 
    created_at = models.DateTimeField(auto_now_add=True)
