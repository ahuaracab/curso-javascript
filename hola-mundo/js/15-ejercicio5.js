'use strict'

var numero = parseInt(prompt("Ingresa un numero","0"));

while (numero<=0 || isNaN(numero)){
	alert("Ingresar solo numeros y que sean positivos");
	numero = parseInt(prompt("Ingresa un numero","0"));
}

document.write("<h1> Los divisores de " + numero + " es(son): </h1>");

for (i=1;i<=numero;i++){
	if (numero%i==0) {
		document.write(i+"<br/>")
	}
}