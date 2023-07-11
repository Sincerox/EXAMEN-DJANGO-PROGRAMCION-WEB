$(document).ready(function() {
  $("#txtIndicador").on("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      $("#btnInformacion").click();
    }
  });

  $("#btnInformacion").click(function (event) {
    event.preventDefault();
    var name = $("#txtIndicador").val();
    if (name.trim() === "") {
      $("#info").html("<p>Debes ingresar un nombre de Pokémon válido.</p>");
    } else {
      $("#info").html("<div class='spinner-border' role='status' id='spinner'><span class='sr-only'></span></div>");
      setTimeout(function() {
        $.ajax({
          url: "https://pokeapi.co/api/v2/pokemon/"+ name,
          data: {
            format: "json",
          },
          error: function () {
            $("#info").html("<p>El Pokémon no se ha encontrado!!!!</p>");
          },
          dataType: "json",
          success: function (data) {
            var $nombre_indicador = data.name;
            var $id = data.id;
            var $foto = $("<img>", {src: data.sprites.front_default});
            var $habilidades = $("<ul>");
            $.each(data.abilities, function (index, value) {
              var $habilidad = $("<li>").text(value.ability.name);
              $habilidades.append($habilidad);
            });
            var $moves = $("<ul>");
            $.each(data.moves, function (index, value) {
              var $move = $("<li>").text(value.move.name);
              $moves.append($move);
            });

            $("#acordeon").html("");
            $("#info").html("<h3>" + $nombre_indicador + "</h3>");
            $("#info").append($foto);
            $("#info").append("<p>ID: " + $id + "</p>");
            $("#info").append("<div id='acordeon'></div>");

            $("#acordeon").append("<h3>Habilidades</h3>");
            $("#acordeon").append("<div></div>");
            $("#acordeon div:last-child").append($habilidades);
            $("#acordeon").append("<h3>Movimientos</h3>");
            $("#acordeon").append("<div></div>");
            $("#acordeon div:last-child").append($moves);

            $("#acordeon").accordion({heightStyle: "content", collapsible: true, active: false});
            $("#spinner").hide();
          },
          type: "GET",
        });
      }, 1000);
       // Retraso de 2 segundos
    }
    
  });
});
