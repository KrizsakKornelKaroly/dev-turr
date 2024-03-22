from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User

from django import forms
from django.forms.widgets import PasswordInput, TextInput
from django.contrib.auth import password_validation

class CreateUserForm(UserCreationForm):
    error_messages = {
        'password_too_short': "A jelszó túl rövid (legalább 8 karakter).",
        'password_entirely_numeric': "A jelszó nem lehet teljesen numerikus.",
        'password_no_uppercase': "A jelszónak tartalmaznia kell legalább egy nagybetűt.",
        'password_no_lowercase': "A jelszónak tartalmaznia kell legalább egy kisbetűt.",
    }

    password1 = forms.CharField(
        label="Jelszó",
        strip=False,
        widget=forms.PasswordInput,
        help_text=password_validation.password_validators_help_text_html(),
    )

    def clean_password1(self):
        password1 = self.cleaned_data.get('password1')
        if len(password1) < 8:
            raise forms.ValidationError(self.error_messages['password_too_short'], code='password_too_short')
        if password1.isdigit():
            raise forms.ValidationError(self.error_messages['password_entirely_numeric'], code='password_entirely_numeric')
        if not any(char.isupper() for char in password1):
            raise forms.ValidationError(self.error_messages['password_no_uppercase'], code='password_no_uppercase')
        if not any(char.islower() for char in password1):
            raise forms.ValidationError(self.error_messages['password_no_lowercase'], code='password_no_lowercase')
        password_validation.validate_password(password1)
        return password1

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
        widgets = {
            'username': forms.TextInput(attrs={'class': 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}),
            'email': forms.EmailInput(attrs={'class': 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}),
            'password1': forms.PasswordInput(attrs={'class': 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}),
            'password2': forms.PasswordInput(attrs={'class': 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}),
        }


class LoginForm(AuthenticationForm):
    username = forms.CharField(widget=TextInput())
    password = forms.CharField(widget=PasswordInput())
    widgets = {
            'username': forms.TextInput(attrs={'class': 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}),
            'password': forms.TextInput(attrs={'class': 'appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'}),
        }