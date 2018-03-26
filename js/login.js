$( document ).ready(function(){

		let credenciales = JSON.parse(localStorage.getItem("login"));
		if (credenciales.username == "admin" && credenciales.password == "admin"){
			
		}
		else if(credenciales.username == "jose" && credenciales.password == "1234"){

			$("#agregarproyecto").html("");
		}
		else{
			alert("Credenciales Inválidos.")
			window.location.href = "login.html"
		}

		function login(){
			let data = {
				username : $("#username").val(),
				password : $("#password").val()
				}
			localStorage.setItem("login", JSON.stringify(data));
			console.log(JSON.stringify(data.datos));
		}
});