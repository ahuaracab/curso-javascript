'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado*/

var numero = parseInt(prompt("Ingresa numeros enteros positivos, para finalizar ingresa un numero negativo",'0'));
var suma=0;
var contador=0;

while(numero>0 && !isNaN(numero)){
	suma += numero;
	contador++;
	numero  = parseInt(prompt("Ingresa otro numero, para finalizar ingresa un numero negativo",'0'));
}

alert("Se ingreso un numero negativo o no numero");

if(contador){
	alert("La suma de los numeros anteriores es:" + suma);
	alert("El promedio de los numeros anteriores es: " + (suma/contador));
}


