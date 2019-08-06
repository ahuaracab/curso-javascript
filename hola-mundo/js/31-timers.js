'use strict'

window.addEventListener('load',()=>{
	// TIMERS

	function intervalo(){
		let tiempo = setInterval(() => {
		//var tiempo = setTimeout(() => { //solo una vez
			console.log("Set interval ejecutado");
			var encabezado = document.querySelector("h1")
			if (encabezado.style.fontSize == "50px") {
				encabezado.style.fontSize = "30px";
			} else {
				encabezado.style.fontSize = "50px";
			}
		},1000);

		return tiempo;
	}
	
	var tiempo = intervalo();

	var stop = document.querySelector("#stop");

	stop.addEventListener("click",() => {
		alert("Has parado el intervalo en bucle");
		clearInterval(tiempo);
	});

	var start = document.querySelector("#start");

	start.addEventListener("click",() => {
		alert("Has iniciado el intervalo en bucle");
		tiempo = intervalo();
	});
});