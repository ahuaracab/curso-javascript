'use strict'

window.addEventListener("load",()=>{

	console.log("DOM cargado!!");

	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none";

	formulario.addEventListener("submit",()=>{
		console.log("Evento submit capturado");

		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = document.querySelector("#edad").value;

		if (nombre.trim() == null || nombre.trim().length == 0 ) {
			//alert("El nombre no es valido");
			document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
			document.querySelector("#error_nombre").style.display = "block";
			console.log(document.querySelector("#error_nombre").textContent);
			return false;
		} else {
			document.querySelector("#error_nombre").style.display = "none";
		}
		if (apellidos.trim() == null || apellidos.trim().length == 0 ) {
			//alert("Los apellidos no son validos");
			document.querySelector("#error_apellidos").innerHTML = "Los apellidos no son valido";
			document.querySelector("#error_apellidos").style.display = "block";
			return false;
		} else {
			document.querySelector("#error_apellidos").style.display = "none";
		}
		console.log(edad);
		if ( edad == null || edad <= 0 || isNaN(edad)) {
			//alert("La edad no es valida");
			document.querySelector("#error_edad").innerHTML = "La edad no es valida";
			document.querySelector("#error_edad").style.display = "block";

			return false;
		} else {
			document.querySelector("#error_edad").style.display = "none";
		}
		box_dashed.style.display = "block";

		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellidos= document.querySelector("#p_apellidos span");
		var p_edad = document.querySelector("#p_edad span");

		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellidos;
		p_edad.innerHTML = edad;

		/*var datos_usuario = [nombre,apellidos,edad];
		var parrafo;
		for(let datos in datos_usuario){
			parrafo = document.createElement("p");
			parrafo.append(datos_usuario[datos]);
			box_dashed.append(parrafo);
		}*/


		//var parrafo = document.createElement("p");
		/*parrafo.append(nombre);
		parrafo.append(apellidos);
		parrafo.append(edad);
		box_dashed.append(parrafo);*/

	});


});