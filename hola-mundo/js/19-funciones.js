'use strict'

function porConsola(numero1,numero2){
	console.log("Suma: " + (numero1 + numero2));
	console.log("Resta: " + (numero1-numero2));
	console.log("Multiplicacion: " + (numero1*numero2));
	console.log("Division: " + (numero1/numero2));
	console.log("************************************");
}

function porPantalla(numero1,numero2){
	document.write("Suma: " + (numero1 + numero2) + "<br/>");
	document.write("Resta: " + (numero1-numero2) + "<br/>");
	document.write("Multiplicacion: " + (numero1*numero2) + "<br/>");
	document.write("Division: " + (numero1/numero2) + "<br/>");
	document.write("************************************ <br/>");
}


function calculadora(numero1,numero2,mostrar=false){
	
	if (!mostrar) {
		porConsola(numero1,numero2);
	} else{
		porPantalla(numero1,numero2);
	}
	//return "Hola soy la calculadora!!";
}

//console.log(calculadora(),calculadora(),calculadora());
// Invocar o llamar a la funcion

/*
calculadora();
calculadora();
calculadora();
calculadora();*/

//var resultado = calculadora();

/*calculadora(5,6);
calculadora(76,65);*/

/*for (var i = 1; i <= 10; i++) {
	console.log(i);
	calculadora(i,8);
}*/

calculadora(1,4);
calculadora(5,2,true);
calculadora(9,4,true);