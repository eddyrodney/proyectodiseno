
$( document ).ready(function() {
	if(localStorage.getItem("data")){
		let objeto = JSON.parse(localStorage.getItem("data"));
		$("#datos").html(`<th scope='row'>${objeto.id}</th><td>${objeto.titulo}</td><td>${objeto.descripcion}</td><td>${objeto.fechaini}</td><td>${objeto.fechafin}</td>`);
		console.log(objeto);
	}
	else
	{
		var objeto;
	}

	$("#boton").click(function(){

		save_data();

	});

	function save_data(){
		
		if(JSON.parse(localStorage.getItem("data")))
		{
			var contador;
			var counter = JSON.parse(localStorage.getItem("data"));
			if(counter.id != null)
			{
				contador = counter.id + 1;
			}
			else
			{

				contador = 1;
			}

		}
		
		if(contador == null)
		{
			contador = 1;
		}

		let data = {
			id : contador,
			titulo : $("#titulo").val(),
			descripcion : $("#descripcion").val(),
			fechaini : $("#fechaini").val(),
			fechafin : $("#fechafin").val()
		}

		localStorage.setItem("data", JSON.stringify(data));

		alert("Proyecto creado satisfactoriamente.");



	}

    
});


	

	
		

