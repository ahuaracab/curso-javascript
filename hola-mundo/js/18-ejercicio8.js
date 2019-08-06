'use strict'

var numero1 = parseInt(prompt('Introduce el primer numero','0'));
var numero2 = parseInt(prompt('Introduce el segundo numero','0'));

while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){
	alert("Ingrese solo numeros y no negativos");
	numero1 = parseInt(prompt('Introduce el primer numero','0'));
	numero2 = parseInt(prompt('Introduce el segundo numero','0'));
}

var resultado = "La suma es: " + (numero1+numero2) + "<br/>" + 
"La resta es: " + (numero1-numero2) + "<br/>" + 
"La multiplicacion es: " + (numero1*numero2) + "<br/>" + 
"La division es: " + (numero1/numero2) + "<br/>";

var resultado2 = "La suma es: " + (numero1+numero2) + "\n" + 
"La resta es: " + (numero1-numero2) + "\n" + 
"La multiplicacion es: " + (numero1*numero2) + "\n" + 
"La division es: " + (numero1/numero2) + "\n";

document.write(resultado);
alert(resultado2);
console.log(resultado2);