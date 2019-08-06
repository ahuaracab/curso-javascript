'use strict'

// Condicionales IF
// Si A es igual a B entonces haz algo

/*
var edad1 =10;
var edad2 = 12;

// Si pasa esto
if (edad1 > edad2) {
	// Ejecuta esto
	console.log("edad1 es mayor que edad2");
}else{
	console.log("edad1 es menor que edad2");
}*/

var edad = 34;
var nombre = 'David Suares';

/*Operadores relacionales
	Mayor: >
	Menos: <
	Mayor o igual: >=
	Menor o igual: <=
	Igual:  ==
	Distinto: !=*/

/*if (edad>=18) {
	// Es mayor de edad
	console.log(nombre + " tiene "+edad+" años, es mayor de edad");
	if (edad <= 33) {
		console.log("Todavia eres millenial");
	} else if(edad > 70){
		console.log("Eres anciano");
	} else{
		console.log("Ya no eres millenial");
	}

}else{
	console.log(nombre + " tiene "+edad+" años, es menor de edad");

}*/

/*Operadores logicos
AND (Y): &&
OR (O): ||
Negacion: !
*/


var year = 2028;

// Negacion
if (year!=2017) {
	console.log("El año no es 2016 realmente es: "+year);
}

// AND
if (year>2000 && year<=2020) {
	console.log("Estamos en la era actual");
} else{
	console.log("Estamos en la era post moderna");
}

// OR

if (year==2008 || (year>=2018&&year==2028)) {
	console.log("El año acaba en 8");
} else{
	console.log("Año no registrado");
}