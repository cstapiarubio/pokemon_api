
    for(var i=1; i<=24;i++){ 
        $('#card').append($('<img>').attr('id',i).attr('data-toggle', "modal").attr('data-target', '#exampleModal').attr('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i + '.png'))   
    }

        $('img').on('click', function(event) {
            var id =$(this).attr('id');
        $.get("https://pokeapi.co/api/v2/pokemon/" + id + "/", function(res) {
            console.log(res);
            var especie = res.species.name;
            var altura = res.height;
            var peso = res.weight;
            console.log(especie);

            for(var i = 0; i < res.types.length; i++) {
            var tipo= res.types[i].type.name;
        }

        $('.modal-body').append("<h4> Nombre: </h4>" + "<p>"  +  especie + "</p>");
        $('.modal-body').append("<h4> Altura: </h4>"+"<p>" + altura+ " metros" +"</p>");
        $('.modal-body').append("<h4> Peso: </h4>"+"<p>" + peso + " kg" + "</p>");
        $('.modal-body').append("<h4> Tipos: </h4>"+"<p>" + tipo + "</p>");
 
        });
        //event.stopPropagation();
    });

    $('.close').on('click', function(event) {
        $('.modal-body').empty();

    });
    
  


