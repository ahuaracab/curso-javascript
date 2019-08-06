type letrasonumero = string | number;

let cadenas: letrasonumero = "121";


// string
let cadena: string | number= "victorribles.es";
//cadena=6;//error se muestra en consola no en la web
cadena = 6;
//number
let numero: number =  12;
//numero= "17";

let true_false: boolean = true;
//true_false = 4;

let cualquiera: any = "hola";
cualquiera=4;

//Arrays
var lenguajes: Array<string> = ["PHP","JS","CSS"];

let years:number[] = [12,13,14];

//


console.log(cadena,numero,true_false, cualquiera, lenguajes,years);