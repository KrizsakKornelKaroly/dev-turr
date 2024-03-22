from django.shortcuts import render, redirect
from . forms import CreateUserForm, LoginForm
from django.contrib.auth.models import auth


from django.contrib.auth import authenticate, login, logout

from django.contrib.auth.decorators import login_required

import requests

from django.contrib import messages # Üzenet a felhasználónak, ha hibás a reg. / bej.
from django.contrib.auth.models import User

#OPENAI
import openai, os
from dotenv import load_dotenv
load_dotenv()
api_key = os.getenv("OPENAI_KEY", None)


def chatbot(request):
    chatbot_response = None
    if(api_key is not None and request.method == 'POST'):
        
        openai.api_key = api_key
        user_input = request.POST.get('user_input') #user_input értéke
        prompt = user_input
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Magyarul."},
                {"role": "user", "content": prompt}
            ],
            max_tokens = 256,
            #stop=""
            temperature=0.5
        )
        print(response)
    return render(request, 'turr/vargajozsef.html', {})

def homepage(request):
    return redirect('turrai')

def informaciok(request):
    return render(request, 'turr/informaciok.html')

def regisztracio(request):
    form = CreateUserForm()

    if request.method == "POST":
        form = CreateUserForm(request.POST)

        username = form.data.get('username') ##ellenőrzés miatt
        if User.objects.filter(username=username).exists():
            messages.error(request, 'Ez a felhasználónév már foglalt!')
        else:
            if form.is_valid():
                username = form.cleaned_data.get('username')
                if User.objects.filter(username=username).exists():
                    messages.error(request, 'Ez a felhasználónév már foglalt!')
                else:
                    form.save()
                    return redirect("bejelentkezes")
            else:
                messages.error(request, 'Kérlek biztonságos jelszót válassz!')

    context = {'registerform': form}
    return render(request, 'turr/regisztracio.html', context=context)

def bejelentkezes(request):

    form = LoginForm()
    if request.method == "POST":
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)

            if user is not None:
                auth.login(request, user)
                return redirect("turrai")
        else:
            messages.error(request, 'Hibás felhasználónév/jelszó páros!')

    context = {'loginform': form}

    return render(request, 'turr/bejelentkezes.html', context)


def kijelentkezes(request):
    # Capture the current URL before logging out
    previous_url = request.META.get('HTTP_REFERER')

    # Logout the user
    auth.logout(request)

    # Redirect the user back to the previous URL or a default URL if there's none
    return redirect(previous_url or '/')


def turrai(request):
    ai_tanarok = [
        {
            'name': 'Foki Zoltán',
            'img': '/static/fokiAI.jpg',
            'href': '/turrai/fokizoltan',
            'caption': 'mérnök informatikus',
        },
        {
            'name': 'Taskovics Péter',
            'img': '/static/taskovicsAI.png',
            'href': '/turrai/taskovicspeter',
            'caption': 'mérnök informatikus',
        },
        {
            'name': 'Varga József',
            'img': '/static/vargaAI.jpg',
            'href': '/turrai/vargajozsef',
            'caption': 'mérnök informatikus',
        },
    ]
    return render(request, 'turr/turrai.html', {'ai_tanarok': ai_tanarok})

def turrmedia(request):
    user = request.user
    if request.user.is_authenticated:
        user = request.user
    instagram_key = "IGQWRNeXR4cGIyS1k1X0VKVFduN09zaFRSSGpRSXVMbzVubThTSnU2NXJVRGtHUGROS3BOVkc1cEZAWUjBnb1VaZAHlUeU9SMDVEaDZA5Y1FoSVo2YW01M3o2elFvOXNpcU0tZA2NKVXhVZAF9SUG9MdzJ3ay1iZAmxNZA1UZD"
    url = f"https://graph.instagram.com/me/media?fields=id,timestamp,caption,media_url,profile_picture&access_token={instagram_key}"
    
    try:
        
        response = requests.get(url)
        feed = response.json()
        images = feed.get('data', [])
    except Exception as e:
        
        images = []
        print(f"Hiba: {e}")

    return render(request, 'turr/turrmedia.html', {'images': images, 'user': user})

@login_required(login_url="bejelentkezes")
def dashboard(request):
    return render(request, 'turr/dashboard.html')