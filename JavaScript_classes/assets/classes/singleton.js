/*
La idea del singletone, es tener una unica instancia que no importa
si se utiliza new varias veces, siempre regrese la misma instancia
de la clase
*/
class Singleton{
    static instancia;//unidefined
    nombre = '';
    constructor (nombre = ''){
        //console.log(Singleton.instancia);
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
        //return this;
    }
}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('Sipderman');
const instancia3 = new Singleton('Hulk');

console.log(`Nombre en la instancia1 es: ${ instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${ instancia3.nombre}`);