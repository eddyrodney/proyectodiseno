
$( document ).ready(function() {
	if(localStorage.getItem("data")){
		let objeto = JSON.parse(localStorage.getItem("data"));
		console.log(objeto.datos)
		
		$(`#datos`).html(`<th scope='row' id='datos${objeto.id}'>${objeto.id}</th><td>${objeto.titulo}</td><td>${objeto.descripcion}</td><td>${objeto.fechaini}</td><td>${objeto.fechafin}</td></th>`).before(objeto.datos);
		
		$("#ultimo").html(`<p><strong>Código: </strong>${objeto.id}</p><p><strong>Título: </strong>${objeto.titulo}<p><strong>Descripción: </strong>${objeto.descripcion}</p><p><strong>Fecha de Inicio: </strong>${objeto.fechaini}</p><p><strong>Fecha Fin Estimada: </strong>${objeto.fechafin}</p>`);
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
			fechafin : $("#fechafin").val(),
			datos : $("#datos").html()
		}

		localStorage.setItem("data", JSON.stringify(data));

		console.log(JSON.stringify(data.datos));

		alert("Proyecto creado satisfactoriamente.");



	}

    
});


	

	
		

