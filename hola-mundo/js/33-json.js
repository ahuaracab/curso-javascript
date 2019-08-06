'use strict'

//JSON - JavaScript Object Notation
window.addEventListener('load',() => {
	var pelicula = {
	titulo: 'Batman vs Superman',
	year: 2017,
	pais: 'Estados unidos'
	};

	var peliculas = [
		{titulo: "La verdad duele",year: 2016, pais:"Francia"},
		pelicula
	];

	var divPeliculas = document.querySelector("#peliculas");
	//console.log(divPeliculas);

	for (let index in peliculas){
		//console.log(peliculas[index]["titulo"]);
		var parrafo = document.createElement("p");
		//parrafo.append(peliculas[index]["titulo"]);
		parrafo.append(peliculas[index].titulo + " - " + peliculas[index].year);
		//console.log(parrafo);
		divPeliculas.append(parrafo);
	}
})