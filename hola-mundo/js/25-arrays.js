'use strict'

// Arrays, arreglos, matrices

var nombre = "Victor Robles";
var nombres = ["Victor","Angelo","Pedro",12,true];

var lenguajes = new Array("PHP","JS","GO","Java");

/*//console.log(nombres[0]);
console.log(lenguajes);*/

/*console.log(nombres.length);
console.log(lenguajes.length);*/

//var elemento = parseInt(prompt("Que elemento del array quieres?",0));

/*if (elemento>=nombres.length) {
	alert("Introduce el numero correcto menor que " + nombres.length);
} else{
	alert("El usuario seleccionado es: " + nombres[elemento]);
}*/

document.write("<h1>Lenguajes de programacion del 2019</h1>");
document.write("<ul>");

/*for (var i = 0; i < lenguajes.length; i++) {
	document.write("<li>"+lenguajes[i]+"</li>");
}*/

//lenguajes.forEach((elemento)=>{ //
//lenguajes.forEach((elemento,indice,arr)=>{//arr es el mismo arreglo
/*lenguajes.forEach((elemento,indice)=>{//arr es el mismo arreglo
	//console.log(arr);
	document.write("<li>"+indice+" - " +elemento+"</li>");
})
*/
/*for (let lenguaje in lenguajes) { // lenguaje es el indice
	document.write("<li>"+lenguajes[lenguaje]+"</li>");
}*/

document.write("</ul>");


// Busqueda

var precios = [10,20,30,60,80];


/*var busqueda = lenguajes.find(variable => {
	return variable == "PHP";
});*/

// var busqueda = lenguajes.find(lenguaje => lenguaje == "GO");
// var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "GO");
var busqueda = precios.some(precio => precio > 20); // devuelve boolean

console.log(busqueda);