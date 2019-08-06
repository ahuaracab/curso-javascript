'use strict'

/*Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales*/
// Si los numero nos son un numero o son negativos, nos los vuelva a pedir

var num1 = parseInt(prompt("Ingrese el primer numero",0));
var num2 = parseInt(prompt("Ingrese el segundo numero",0));

//console.log(num1,num2);

while(num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2)){
	alert("Ingrese solo numeros y que sean positivos");
	num1 = parseInt(prompt("Ingrese el primer numero",0));
	num2 = parseInt(prompt("Ingrese el segundo numero",0));
}

if (num1==num2){
	alert("Los numeros son iguales");
} else if (num1<num2){
	alert("El numero mayor es: " + num2);
	alert("El numero menor es: " + num1);
} else {
	alert("El numero mayor es: " + num1);
	alert("El numero menor es: " + num2);
} /*else {
	alert("Ingrese solo numeros");
}*/