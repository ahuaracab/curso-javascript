'use strict'

//Fetch (sustituto de ajax, o hace peticiones ajax)  y peticiones a servicios / apis rest
//var usuarios = [];
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");

//fetch("https://jsonplaceholder.typicode.com/users")
	getUsuarios()
	.then(dataUsuarios => dataUsuarios.json())
	.then(usersJSON=> {
		listadoUsuarios(usersJSON.data);	
		return getInfo();
	})
	.then(dataInfo => {//no importa el argumento
		div_profesor.innerHTML = dataInfo;
		return getJanet();
	})
	.then(dataJanet=> dataJanet.json())
	.then(janetJSON =>  {
		mostrarJanet(janetJSON.data);
	})
	.catch(error => {
		//console.log(error);
		alert("error en las peticiones");
	});
	;

function getUsuarios(){
	return fetch("https://reqres.in/api/users");
}

function getJanet(){
	return fetch("https://reqres.in/api/users/2");
}

function getInfo(){

	var profesor = {
		nombre: "Angelo",
		apellidos: "Huaraca",
		url: "https://victorroblesweb.es"
	};

	return new Promise((resolve,reject) => {

		var profesor_strig = "";

		setTimeout( function() {
			profesor_strig = JSON.stringify(profesor);
			if (typeof profesor_strig != "string" || profesor_strig == "") return reject("errorsillo");
			return resolve(profesor_strig);
		},3000);
	});
}

function listadoUsuarios(usuarios){
	usuarios.map((user,i) => {
		let nombre =  document.createElement('h2');
		nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
		div_usuarios.append(nombre);
	});
	document.querySelector("#usuarios .loading").style.display = "none";
}

function mostrarJanet(user){
	
	let nombre = document.createElement('h4');
	let avatar = document.createElement('img');

	nombre.innerHTML = user.first_name + " " + user.last_name;
	avatar.src =  user.avatar;
	avatar.width  = "100";

	div_janet.append(nombre);
	div_janet.append(avatar);
	
	document.querySelector("#janet .loading").style.display = "none";
}

