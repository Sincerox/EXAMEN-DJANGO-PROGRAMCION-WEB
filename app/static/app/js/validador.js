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
  },
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
  },
  errorPlacement: function(error, element) {
    error.addClass("error-message");
    error.insertAfter(element);
    element.addClass("error-input");
  },
  success: function(label, element) {
    // Restaurar el estilo predeterminado
    $(element).removeClass("error-input");
    $(element).siblings(".error-message").remove();
  }
});

$(document).ready(function() {
  $("#formulario1").submit(function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    if ($("#formulario1").valid()) {
      // Mostrar la alerta de éxito si el formulario es válido
      $(".alert-success")
        .text("El formulario se envió exitosamente.")
        .fadeIn(500)
        .delay(1500)
        .fadeOut(500, function() {
          window.location.href = "/"; // Redirigir al índice
        });
    } else {
      // Mostrar la alerta de error si el formulario no es válido
      $(".alert-danger")
        .text("El formulario no se puede enviar debido a errores.")
        .fadeIn(500)
        .delay(1500)
        .fadeOut(500);
    }
  });
});
