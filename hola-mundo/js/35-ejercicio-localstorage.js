'use strict'

var formulario = document.querySelector("#formPeliculas");


formulario.addEventListener('submit',function(){
	var titulo = document.querySelector("#addPelicula").value;
	if (titulo.length > 0){
		localStorage.setItem(titulo,titulo);
	}
});

var ul = document.querySelector("#peliculasList");

for(var i in localStorage){
	if (typeof localStorage[i] == "string") {
		var li = document.createElement("li");
		li.append(localStorage[i]);
		ul.append(li);
	}
}

var formulariob = document.querySelector("#formBorrarPeliculas");

formulariob.addEventListener('submit',function(){
	var titulo = document.querySelector("#deletePelicula").value;
	if (titulo.length > 0){
		localStorage.removeItem(titulo);
	}
});


