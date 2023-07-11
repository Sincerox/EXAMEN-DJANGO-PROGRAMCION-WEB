from django import forms
from .models import  Producto
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = [
            'nombre',
            'precio',
            'descripcion',
            'imagen',
        ]
        labels = {
            'nombre':'Nombre',
            'precio':'Precio',
            'descripcion':'Descripcion',
            'imagen':'Imagen',
        }
        widgets = {
            'nombre':forms.TextInput(attrs={'class':'form-control'}),
            'precio':forms.TextInput(attrs={'class':'form-control'}),
            'descripcion':forms.TextInput(attrs={'class':'form-control'}),
             'imagen':forms.FileInput(attrs={'class':'form-control','type':'file'}),
        }


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ["username","first_name", "last_name","email","password1","password2"]