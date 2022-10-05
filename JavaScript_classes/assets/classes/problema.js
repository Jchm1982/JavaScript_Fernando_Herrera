const fer ={
    nombre: 'Fernando',
    edad: 40,
    imprimir(){
        console.log(`Nombre: ${ this.nombre} - edad:${ this.edad}`);
    }
}

const pedro ={
    nombre: 'Pedro',
    edad: 39,
    imprimir(){
        console.log(`Nombre: ${ this.nombre} - edad:${ this.edad}`);
    }
}

//fer.imprimir();

//Esto se hizo cuando se tienen las misma herencia, propiedades,metodos e instancias

function Persona(nombre,edad){
    console.log('Se ejecuto esta línea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre} - edad:${ this.edad}`);
    }
}

const maria = new Persona('Maia', 17);
const gris = new Persona('Gris', 35);
//console.log(maria);
maria.imprimir();
gris.imprimir();