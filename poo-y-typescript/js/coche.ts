interface CocheBase {
	getColor():string;
	setColor(color);
	getModelo():string;
	setModelo(modelo);
	
}

class Coche implements CocheBase{

	public color: string;
	public modelo: string;
	public velocidad: number = 0;

	constructor(modelo:any = null){
		this.color = "Blanco";
		this.velocidad = 0;

		if(modelo == null){
			this.modelo = "BMW Generico";
		} else {
			this.modelo = modelo;
		}
	}

	public getColor(){
		return this.color;
	}

	public setColor(color: string){
		this.color = color;
	}

	public getModelo(){
		return this.modelo;
	}

	public setModelo(modelo: string){
		this.modelo = modelo;
	}

	public acelerar (){
		this.velocidad++;
	}

	public frenar(){
		this.velocidad--;
	}

	public getVelocidad(): number{
		return this.velocidad; 
	}
}

var coche1 = new Coche("grand cooper");
var coche2 = new Coche();
var coche3 = new Coche();

coche1.setColor("rojo");
coche2.setColor("azul");
coche3.setColor("verde");

coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();

console.log("El color del coche 1 es: " + coche1.getModelo());
console.log("El color del coche 2 es: " + coche2.getColor());
console.log("El color del coche 3 es: " + coche3.getColor());

console.log(coche1.velocidad);

coche1.frenar();

console.log(coche1.velocidad);

