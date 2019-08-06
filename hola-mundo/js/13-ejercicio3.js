'use strict'

/*Hacer un programa que muestre los numeros 
entre dos numeros introducidos por el usuario*/

var numero1 = parseInt(prompt("Introduce el primer numero",'0'));
var numero2 = parseInt(prompt("Introduce el segundo numero",'0'));
//var numeros = "";

if(numero1-numero2>1){
	document.write("<h1>Los numeros entre "+numero2+ " y "+ numero1 + " son:</h1> ");
	for (var i=numero2+1;numero1>i;i++){
		//numeros = numeros + i + " ";
		document.write(i+"<br/>");
	}
	//alert("Los numeros entre "+numero2+ " y "+ numero1 + " son: "+numeros)
} else if (numero2-numero1>1){
	document.write("<h1>Los numeros entre "+numero1+ " y "+ numero2 + " son:</h1> ");
	for (var i=numero1+1;numero2>i;i++){
		
		//numeros = numeros + i + " ";
		document.write(i+"<br/>");
	}
	//alert("Los numeros entre "+numero1+ " y "+ numero2 + " son: "+numeros)
} else {
	alert("No existen numeros entre los numeros ingresados");
}