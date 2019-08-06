'use strict'

// BOM - Browser Object Model

function getBom(){
	//de browser
	console.log(window.innerHeight);//alto
	console.log(window.innerWidth);//ancho
	//de pc
	console.log(screen.height);
	console.log(screen.width);

	console.log(window.location);

}

function redirect(url) {
	window.location.href = url;
}

function abrirVentana(url) {
	window.open(url,"","width=400,height=300"); // abre pestana nueva con tamano definido
}
getBom();
