'use strict'

// Funciones anonimas

// Es una funcion que no tiene nombre
/*
var pelicula = function(nombre){
	return "La pelicula es: " + nombre;
}*/

function sumame(numero1,numero2,sumaYmuestra,sumaPorDos){
	var sumar = numero1+numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);
	return sumar;
}

// console.log(sumame(4,5));
//funcion flecha
sumame(5,7, (dato) => {
	console.log("La suma es:",dato);
},//callback
function(dato){
	console.log("La suma por dos: ",(dato*2));
});