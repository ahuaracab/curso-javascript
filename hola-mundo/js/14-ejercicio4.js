'use strict'

/*Hacer un programa que muestre los numeros 
entre dos numeros introducidos por el usuario*/

var numero1 = parseInt(prompt("Introduce el primer numero",'0'));
var numero2 = parseInt(prompt("Introduce el segundo numero",'0'));
//var numeros = "";

if( numero1-numero2>2 || (numero1-numero2==2 && numero1%2==0 && numero2%2==0) ){
	document.write("<h1>Los numeros entre "+numero2+ " y "+ numero1 + " son:</h1> ");
	for (var i=numero2+1;numero1>i;i++){
		//numeros = numeros + i + " ";
		if(i%2==1)
		{
			document.write(i+"<br/>");
		}
	}
	//alert("Los numeros entre "+numero2+ " y "+ numero1 + " son: "+numeros)
} else if ( numero2-numero1>2 || (numero2-numero1==2 && numero1%2==0 && numero2%2==0)){
	document.write("<h1>Los numeros entre "+numero1+ " y "+ numero2 + " son:</h1> ");
	for (var i=numero1+1;numero2>i;i++){
		
		//numeros = numeros + i + " ";
		if (i%2==1) {
			document.write(i+"<br/>");
		}
	}
	//alert("Los numeros entre "+numero1+ " y "+ numero2 + " son: "+numeros)
} else {
	alert("No existen numeros impares entre los numeros ingresados");
}