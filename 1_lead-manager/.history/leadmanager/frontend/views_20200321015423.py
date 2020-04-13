from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')               #looks for file leadmanager/frontend/templates/frontend/index.html