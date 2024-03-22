from django.shortcuts import render

from django.http import HttpResponse

# Create your views here.
def homepage(request):

    return render(request, 'turr/index.html')

def regisztracio(request):
    pass


def bejelentkezes(request):
    pass

def dashboard(request):
    pass