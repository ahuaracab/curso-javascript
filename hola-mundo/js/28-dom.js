'use strict'

// DOM - Document Object Model

function cambiaColor(color){
	caja.style.background = color;
}


//Conseguir elementos con un id concreto

//var caja = document.getElementById("micaja"); //obtener div
//var caja = document.getElementById("micaja").innerHTML ; //obtener contenido

//var caja = document.getElementById("micaja") ;
var caja = document.querySelector("#micaja");

caja.innerHTML = "Hola a todos";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

//console.log(caja);

// Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');

//console.log(todosLosDivs.length);
//var contenidoEnTexto = todosLosDivs[2].textContent;
//var contenidoEnTexto = todosLosDivs[2];

//contenidoEnTexto.innerHTML = "REAFIRMO QUE SOY EL SEGUNDO"; //innerHTML permite cambia texto
//console.log(todosLosDivs);
//contenidoEnTexto.style.background = "red";

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

//todosLosDivs.forEach((valor,indice) => {//no se puede usar
for (let i=0; i<todosLosDivs.length;i++){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosLosDivs[i].textContent);
	//debugger;
	//parrafo.appendChild(texto); //basta con append y preprend
	parrafo.append(texto);
	seccion.append(parrafo);
}
seccion.append(hr);
// console.log(contenidoEnTexto);

// Conseguir elementos por su clase

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');

divsAmarillos[0].style.background="yellow";

for (let div in divsRojos){
	//console.log(typeof divsRojos[div]);
	if (divsRojos[div].className == "rojo"){
		divsRojos[div].style.background = "red";
	}
	
}

//console.log(divsRojos);

// Query selector

var id = document.querySelector("#encabezado"); //solo selecciona un elemento
console.log(id);

var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelectorAll("div");
console.log(etiqueta);

