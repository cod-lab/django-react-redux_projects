from django.db import models
from django.contrib.auth.models import User                             # user model

# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
    # owner => new field for Users added in table/model 'Lead'
    # foreign key for connecting to table/model 'User' to table/model 'Lead'
    # User => table/model 'User'
            # related_name="leads" => its the common field btw those two tables (point of connection)
    # on_delete=models.CASCADE => if a user is deleted then all his leads will be deleted as well
    # null=True => it allows leads with no owner as well, so already stored leads in DB won't occur any err
    created_at = models.DateTimeField(auto_now_add=True)
