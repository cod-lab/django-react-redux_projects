# any urls that have to do with authenticaion will go in here
from django.urls import path, include
from .api import RegisterAPI                                            # importing from 'leadmanager/accounts/api.py
from knox import views as knox_views

urlpatterns = [
    path('api/auth',include('knox.urls')),
    path('api/auth/register',RegisterAPI.as_view()),                    # .as_view = generic api view
    path('api/auth/register',LoginAPI.as_view()),                       # .as_view = generic api view
]
