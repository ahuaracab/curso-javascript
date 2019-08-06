module Tienda{
	export class Ropa{
		constructor(public titulo: string){
			alert(titulo);
		}
	}

	export class Informatica{
		constructor(public titulo: string){
			alert('tienda de tecnologia : ' + titulo);
		}
	}
}

function arranque(lanzar:string){
	return function (target: Function){
		target.prototype.lanzamiento = function():void{
			console.log(lanzar);
		}
	}
}

import Inf = Tienda.Informatica;

let cargar_informatica = new Inf("supertienda");

@arranque("se esta lanzando")
class Programa{

	public nombre: string;
	public version: number;

	getNombre(){
		return this.nombre;
	}

	setNombre(nombre: string){
		this.nombre = nombre;
	}

	getVersion(){
		return this.version;
	}

	setVersion(version: number){
		this.version = version;
	}

}

class EditorVideo extends Programa{
	public timeline: number;

	setTimeLine(timeline: number){
		this.timeline = timeline;
	}

	getTimeLine(){
		return this.timeline;
	}

	getAllData():string{
		return this.getNombre()+" - "+this.getVersion() + " - " + this.getTimeLine()
	}
}

var editor = new EditorVideo();

editor.setVersion(1);
editor.setNombre("Camtasia studio");
editor.setTimeLine(4000);

var programa2 = new Programa();
programa2.lanzamiento();
//console.log(editor.getAllData());


var programas = [];

function guardar (){
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

	var programa = new Programa();
	programa.setNombre(nombre);
	//programa.setVersion(version);

	programas.push(programa);

	var list = "";
	for(var i=0; i<programas.length;i++){
		list = list + "<li>" + programas[i].getNombre()+"</li>"; 
	}

	var listado = <HTMLElement>document.getElementById("listado");
	listado.innerHTML = list;

	(<HTMLInputElement>document.getElementById("nombre")).value = "";
}
