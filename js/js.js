
$( document ).ready(function() {
	if(localStorage.getItem("data")){
		let objeto = JSON.parse(localStorage.getItem("data"));
		console.log(objeto.datos)
		
		$(`#datos`).html(`<th scope='row' id='datos${objeto.id}'>${objeto.id}</th><td>${objeto.titulo}</td><td>${objeto.descripcion}</td><td>${objeto.fechaini}</td><td>${objeto.fechafin}</td><td><input type='button' class='btn-primary' id='mostrar' value='ver'></td></th>`).before(objeto.datos);
		
		$("#ultimo").html(`<p><strong>Código: </strong>${objeto.id}</p><p><strong>Título: </strong>${objeto.titulo}<p><strong>Descripción: </strong>${objeto.descripcion}</p><p><strong>Fecha de Inicio: </strong>${objeto.fechaini}</p><p><strong>Fecha Fin Estimada: </strong>${objeto.fechafin}</p>`);

		$("#tabla-codigo").html(`<p align='center'><strong>${objeto.id}</strong></p>`);
		$("#tabla-titulo").html(`<p align='center'><strong>${objeto.titulo}</strong></p>`);
		$("#tabla-descripcion").html(`<p align='center'><strong>${objeto.descripcion}</strong></p>`);
		$("#tabla-fechaini").html(`<p align='center'><strong>${objeto.ini}</strong></p>`);
		$("#tabla-fechafin").html(`<p align='center'><strong>${objeto.fechafin}</strong></p>`);
		//$("#tabla-jefe").html(`<p align='center'><strong>${objeto.id}</strong></p>`);
		//$("#tabla-tareas").html(`<p align='center'><strong>${objeto.id}</strong></p>`);
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

	// Get the modal
	var modal = document.getElementById('myModal2');

	// Get the button that opens the modal
	var btn = document.getElementById("mostrar");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function(event) {
	    modal.style.display = "block";
	    event.preventDefault();
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

    
});


	

	
		

