from django.urls import path 
from . import views 

urlpatterns =[
    path('', views.index, name='index'),
    path('form', views.form, name='form'),
    path('catalogo', views.catalogo, name='catalogo'),
    path('pokedex', views.pokedex, name='pokedex'), 
    path('registro', views.registro, name ="registro"),
    path('agregar', views.ProductoCreate.as_view(), name ="agregar"),
    path('listarproducto', views.ProductoList.as_view(), name='listarproducto'),
    path('editar/<int:pk>', views.ProductoUpdate.as_view(), name='editarP'),
    path('borrar/<int:pk>', views.ProductoDelete.as_view(), name='borrarP'),


 
]