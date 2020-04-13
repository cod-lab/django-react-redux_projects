from django.db import models
from django.contrib.auth.models import User                             # user model

# Create your models here.
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
    # owner => new field for Users added in table/model 'Lead'
    # foreign key(in current table) for connecting table/model 'Lead' to table/model 'User'
    # User => table/model 'User'
    # related_name="leads" => it is the name for set of leads of an user/owner OR  it is the collection of leads that any particular owner will have
    # on_delete=models.CASCADE => if a user is deleted then all his leads will be deleted as well
    # null=True => it allows leads with no owner as well, so already stored leads in DB won't occur any err
    created_at = models.DateTimeField(auto_now_add=True)
