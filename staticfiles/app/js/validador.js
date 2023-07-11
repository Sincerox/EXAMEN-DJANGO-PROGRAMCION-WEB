// objeto.metodo(json)

$("#formulario1").validate({
  rules: {
    "txtEmail": {
      required: true,
      email: true
    },
    "txtNombre": {
      required: true,
      minlength: 5
    },
    "txtApellido": {
      required: true,
      minlength: 5
    },
    "txtSugerencia": {
      required: true,
      minlength: 5
    },
    "txtMensaje": {
      required: true,
      minlength: 20
    }
  }, // --> Fin de reglas
  messages: {
    "txtEmail": {
      required: 'Ingrese email!!!',
      email: 'No cumple formato'
      
    },
    "txtNombre": {
      required: 'Ingrese su nombre!!!',
      minlength: 'Debe tener al menos 5 caracteres.'
    },
    "txtApellido": {
      required: 'Ingrese su Apellido!!!',
      minlength: 'Debe tener al menos 5 caracteres.'
    },
    "txtSugerencia": {
      required: 'Ingrese tipo de Sugerencia!!!',
      minlength: 'Debe tener al menos 5 caracteres.'
    },
    "txtMensaje": {
      required: 'Ingrese su Mensaje!!!',
      minlength: 'Debe tener al menos 20 caracteres.'
    }
  } //-->Fin de mensajes

});



