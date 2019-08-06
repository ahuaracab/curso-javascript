var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
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
