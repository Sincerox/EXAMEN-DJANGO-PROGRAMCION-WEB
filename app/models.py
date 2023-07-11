from django.db import models

# Create your models here.
class Producto(models.Model):
    nombre = models.CharField(max_length=30)
    precio = models.PositiveSmallIntegerField()
    descripcion = models.CharField(max_length=100)
    imagen = models.ImageField(upload_to="productos", null=True)
    
def __str__(self):
    return str(self.producto)
