'use strict'

var numero = parseInt(prompt("Ingresa un numero","0"));

while (numero<=0 || isNaN(numero)){
	alert("Ingresar solo numeros y que sean positivos");
	numero = parseInt(prompt("Ingresa un numero","0"));
}

if (numero%2==0) {
	alert("El numero es par");
} else {
	alert("El numero es impar");
}
