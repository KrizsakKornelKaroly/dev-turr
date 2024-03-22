from django.urls import path

from . import views

urlpatterns = [
    path('', views.homepage, name=''),
    path('regisztracio', views.regisztracio, name='regisztracio'),
    path('bejelentkezes', views.bejelentkezes, name='bejelentkezes'),
    path('dashboard', views.dashboard, name='dashboard'),
]
