'use strict'

// Transformacion de texto

var numero = 444;
var texto1 = "Bienvenido al curso de Javascript curso de Victor Robles    ";
var texto2 = "es muy buen curso";

/*var dato1 = numero.toString();
var dato2 = texto1.toUpperCase();
var dato3 = texto2.toLowerCase();*/

/*console.log(dato1);
console.log(dato2);
console.log(dato3);*/

// Calcular longitud
//var nombre = "Angelo";

//console.log(nombre.length);


// Concatenar

//var textoTotal = texto1 + " " + texto2;


/*var textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal);*/

//var busqueda = texto1.indexOf("curso");

//var busqueda = texto1.lastIndexOf("cursos");

/*var busqueda = texto1.search("curso");
console.log(busqueda); // -1 si no encuentra la palabra*/

// var busqueda = texto1.match("curso"); //solo encuentra una
// var busqueda = texto1.match(/curso/gi); 
// var busqueda = texto1.match(/curso/g); 

var busqueda = texto1.substr(14,3); // INICIO Y CANTIDAD
// var busqueda = texto1.charAt(44);
// var busqueda = texto1.startsWith("Bienvenido"); 
// var busqueda = texto1.endsWith("Victor Robles");
// var busqueda = texto1.includes("Javascript");  
// var busqueda = texto1.replace("Javascript","Symfony"); 


// var busqueda = texto1.slice(14); //empieza de 14
var busqueda1 = texto1.slice(14,17); // INICIO Y FINAL

// var busqueda = texto1.split(" "); //array separado por espacios

// var busqueda = texto1.trim(); //borra espacios delante y atras

console.log(busqueda); 
console.log(busqueda1); 

