//Interface 
interface CamisetaBase{
	setColor(color);
	getColor();
}

//Decorador
/*function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void {
			console.log("camiseta estampada con el logo de: "+logo);
		}
	}
}*/

//Clase (molde del objeto)
//@estampar('Gucci Gang')
class Camiseta implements CamisetaBase{
	
	//Propiedades (caracteristicas del objeto)
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	//Constructor
	constructor (color,modelo,marca,talla,precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	//Metodos (funciones o acciones del objeto)
	public setColor(color){
		this.color=color;
	}

	public getColor(){
		return this.color;
	}

}

var camiseta = new Camiseta("rojo","manga larga","nike","L",10);
//camiseta.estampacion();

//Clase hija
class Sudadera extends Camiseta{
	private capucha: boolean;
	setCapucha(capucha:boolean){
		this.capucha = capucha;
	}
	getCapucha():boolean{
		return this.capucha;
	}
}

var sudadera_nike = new Sudadera("rojo","manga larga","nike","L",10);
sudadera_nike.setCapucha(true);
console.log(sudadera_nike);
console.log(sudadera_nike.getCapucha());
console.log(sudadera_nike.getColor());