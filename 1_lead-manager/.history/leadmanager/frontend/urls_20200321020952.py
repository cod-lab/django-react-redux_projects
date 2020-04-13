from django.urls import path
from . import views                     #importing views from current dir
urlpatters =[
    path('',views.index)                #loading views for root dir
    #views.index = leadmanager/frontend/views.py.index
]