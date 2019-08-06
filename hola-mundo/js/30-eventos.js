'use strict'

// Eventos del raton

window.addEventListener('load',() => {
	function cambiarColor(){
		//console.log("me has dado clic");
		var bg = boton.style.background;
		if (bg == "green"){
			boton.style.background = "red";

		} else{
			//console.log("no es verde");
			boton.style.background = "green";
		}
		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc"

		return true;
	}

	var boton = document.querySelector("#boton");

	// click
	boton.addEventListener('click', function() { // con () => no funcion el this  
		cambiarColor();
		//boton.style.border = "10px solid black";
		console.log(this);
		this.style.border = "10px solid black";
	});

	// mouse over
	boton.addEventListener('mouseover', () => boton.style.background = "yellow");

	// mouseout
	boton.addEventListener('mouseout', () => boton.style.background = "blue");

	// Focus
	var input = document.querySelector("#campo_nombre");
	input.addEventListener('focus', () => console.log("Estas dentro del input"));

	// Blur
	input.addEventListener('blur', () => console.log("Estas fuera del input"));

	//Keydown
	input.addEventListener('keydown', () => console.log("Pulsando esta tecla ",String.fromCharCode(event.keyCode)));

	//Keypress
	input.addEventListener('keypress', () => console.log("Tecla presionada ",String.fromCharCode(event.keyCode)));

	//Keyup
	input.addEventListener('keyup', () => console.log("Tecla soltada ",String.fromCharCode(event.keyCode)));


} );
