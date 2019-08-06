'use strict'

var categorias = ["Accion","Terror","Comedia"];
var peliculas = ["La verdad duele","La vida es bella","Gran torino"];

// peliculas.sort();
// peliculas.reverse();

// console.log(peliculas);

var cine = [categorias,peliculas];

// console.log(cine[0][1]); 
// console.log(peliculas);

// var elemento = prompt("Introduce tu pelicula:");


/*while(elemento != "ACABAR"){
	peliculas.push(elemento);
	elemento = prompt("Introduce tu pelicula:");
}
*/




/*var indice = peliculas.indexOf('La vida es bella');
console.log(indice);*/

/*if (indice != -1) {
	peliculas.splice(indice,1);
}*/

// peliculas.pop(); // BORRAR ULTIMO ELEMENTO

var pelicula_string = peliculas.join("-");

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(pelicula_string);
console.log(cadena_array);