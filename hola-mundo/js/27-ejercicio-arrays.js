'use strict'
var cantidad = 6;
var numeros = new Array(cantidad);

function mostrar_lista(lista){

	document.write("<ul>")

	for (let numero in lista){
		document.write("<li>"+lista[numero]+"</li>");
		console.log(lista[numero]);
	} 

	document.write("</ul>")
}

alert("Ingrese " + cantidad + " numeros");
for (let i=0; i < cantidad; i++) {
	numeros[i] = parseInt(prompt("Ingrese el numero",0));
}

var numeros_copy = numeros.slice();
var numeros_copy2 = numeros.slice();

document.write("<br/><h2>Los numeros ingresados son: </h2>");
mostrar_lista(numeros);
/*document.write("<ul>")

for (let numero in numeros){
	document.write("<li>"+numeros[numero]+"</li>");
	console.log(numeros[numero]);
	//console.log(typeof numeros[numero]);
}  

document.write("</ul>")*/


/*var inversa = numeros.reverse();
console.log(inversa);*/

numeros.sort((a,b) => a-b); //b-a descendente
document.write("<br/><h2>Los numeros ordenados son: </h2>");
mostrar_lista(numeros);

/*document.write("<ul>")

for (let numero in numeros){
	document.write("<li>"+numeros[numero]+"</li>");
	console.log(numeros[numero]);
}  

document.write("</ul>")
*/
numeros_copy.reverse();
document.write("<br/><h2>Los numeros en ordener inverso al que se ingreso son: </h2>");
mostrar_lista(numeros_copy);
/*document.write("<ul>")

for (let numero in numeros_copy){
	document.write("<li>"+numeros_copy[numero]+"</li>");
	console.log(numeros_copy[numero]);
}  

document.write("</ul>")*/

document.write("<h2>Esta lista tiene " + numeros.length + " elementos");

var busqueda = parseInt(prompt("Coloque un numero y le diremos si es uno de los 5 anteriores",0));
var posicion = numeros_copy2.findIndex(numero => numero==busqueda);
console.log("Posicion: "+posicion);
//if (numeros_copy2.find(numero => numero==busqueda) == busqueda) {
if (posicion != -1) {
	document.write("<br/> Se encontro el numero buscado");
	document.write("<br/> Su indice es: " + posicion);
} else {
	document.write("<br/> No se encontro el numero buscado");
}