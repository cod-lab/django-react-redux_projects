from django.urls import path
from . import views                     #importing views from current dir
urlpatterns = [
    path('',views.index)                #loading views for root dir
    #views.index = leadmanager/frontend/views.py.index()
]