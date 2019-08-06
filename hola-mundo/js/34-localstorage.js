'use strict'

//Localstorage

//Comprobar disponibilidad

if (typeof(Storage) !== 'undefined') {
	console.log("Localstorage disponible");
} else {
	console.log("Incompatible con Localstorage");
}


// Guardar datos

localStorage.setItem("titulo","Curso de JS");
//localStorage.setItem("numero",1);
//localStorage.setItem("arreglo",["manzana","pera"]);

//Recuperar elemento

document.querySelector("div").innerHTML = localStorage.getItem("titulo");

// Guardar objeto

var usuario = {
	nombre: "Angelo",
	email: "angelohb1203@gmail.com",
	web: "google.com"
};

localStorage.setItem("usuario",JSON.stringify(usuario));

//Recuperar objeto

var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log (userjs);
document.querySelector("#usuarios").append(userjs.nombre + " - " + userjs.email);


//Borrar 

//localStorage.removeItem("usuario");
//localStorage.clear();