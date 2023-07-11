from django.shortcuts import render, redirect,get_object_or_404
from .models import Producto
from .forms import  CustomUserCreationForm 
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.shortcuts import redirect
from django.urls import reverse

from django.contrib.auth.mixins import UserPassesTestMixin, AccessMixin, LoginRequiredMixin
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required, user_passes_test
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .forms import ProductoForm

# Create your views here.

def index(request): 
    context={}
    return render(request, 'app/index.html', context)

def pokedex(request): 
    context={}
    return render(request, 'app/busquedaPokemon.html', context)

def form(request): 
    context={}
    return render(request, 'app/formulario.html', context)

def catalogo(request): 
    productos=Producto.objects.all()
    context={"productos": productos    }
    return render(request, 'app/catalogo.html', context)



def listarproducto(request):
    productos = Producto.objects.all()
    return render(request, 'app/productoscatalogo.html', {'productos': productos})


def registro(request):
    if request.method == 'POST':
        formulario = CustomUserCreationForm(data=request.POST)
        if formulario.is_valid():
            user = formulario.save()
            login(request, user)
            messages.success(request, f"Bienvenido/a: {user.username}, ¡Te has registrado correctamente!")
            return redirect('registro')
    else:
        formulario = CustomUserCreationForm()

    context = {'form': formulario}
    return render(request, 'registration/registro.html', context)


class ProductoList(UserPassesTestMixin, ListView):
    model = Producto
    template_name = 'app/productoscatalogo.html'

    def test_func(self):
        return self.request.user.is_superuser

    def handle_no_permission(self):
        messages.error(self.request, 'Acceso denegado')
        login_url = reverse('login')  # Reemplaza 'login' con la URL de inicio de sesión
        index_url = reverse('index')  # Reemplaza 'index' con la URL del índice
        return redirect(f"{login_url}?next={index_url}")


class ProductoCreate (CreateView):
    model = Producto
    form_class = ProductoForm
    template_name = 'app/crud/agregar.html'
    success_url = reverse_lazy('listarproducto')


class ProductoUpdate(UpdateView):
    model = Producto
    form_class = ProductoForm
    template_name = 'app/crud/editar.html'
    success_url = reverse_lazy('listarproducto')


class ProductoDelete(DeleteView):
    model = Producto
    template_name = 'app/crud/borrar.html'
    success_url = reverse_lazy('listarproducto')


