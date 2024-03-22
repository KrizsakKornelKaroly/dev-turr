from django.urls import path

from . import views

urlpatterns = [
    path('', views.homepage, name=""),
    path('regisztracio', views.regisztracio, name="regisztracio"),
    path('bejelentkezes', views.bejelentkezes, name="bejelentkezes"),
    path('dashboard', views.dashboard, name="dashboard"),
    path('kijelentkezes', views.kijelentkezes, name="kijelentkezes"),
    path('turrmedia', views.turrmedia, name="turrmedia"),
    path('turrai', views.turrai, name="turrai"),
    path('turrai/vargajozsef', views.chatbot, name="vargajozsef"),
    path('turrai/informaciok', views.informaciok, name="turraiinformaciok")
]

"""
<form method="POST">
      {% csrf_token %}
      <input type="text" class="form-input" name="user_input" />
      <button type="submit">OK</button>
    </form>
"""