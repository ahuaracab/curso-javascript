'use strict'

/*var numero = parseInt(prompt("Ingresa un numero","0"));

while (numero<0 || isNaN(numero)){
	alert("Ingresar solo numeros y que no sean negativos");
	numero = parseInt(prompt("Ingresa un numero","0"));
}

document.write("<h1>La tabla de multiplicar del numero "+numero+" es: </h1>");

for (var i=0; i <= 12; i++) {
	document.write(numero+" x " + i + " = " + numero*i + "<br/>");
}*/

document.write("<h1>Todas la tablas de multiplicar hasta el 12 es: </h1>");
for (var i=0; i <= 12; i++) {
	document.write("<h2>Tabla de multiplicar del " + i + ": </h2>");
	for (var j=0; j <= 12; j++) {
		document.write(i+" x " + j + " = " + i*j + "<br/>");
	}
}