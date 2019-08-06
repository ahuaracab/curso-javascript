'use strict'

// Bucle while

var year=2018;

while(year!=1991){
	//ejecuta esto
	console.log("Estamos en el año: " + year);
	if (year==2000) {
		break;
	}
	year--;
} 

var years = 30;
//Do while

do{
	alert("SOLO CUANDO SEA DIFERENTE DE 20");
	years--;
} while(years>25);