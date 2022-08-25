/*
function crearPersona (nombre, apellido){
    return{
        nombre:nombre,
        apellido:apellido
    }

}

const persona = crearPersona('Juan Carlos','Hernandez');
console.log(persona);
*/
/*Lo protips, desde JavaScrip 6 cuando se quiere retornar algi en un objeto,
y el nombre de la propiedad es exactamente el mismo de la variable con la que se quiere
hacer la impresion,no se necesita especificarlo 2 veces quedando de la siguiente forma
*/

/*
function crearPersona (nombre, apellido){
    return{nombre,apellido}

}
const persona = crearPersona('Juan Carlos','Hernandez');
console.log(persona);
*/

/*
//Con funcion de flecha
const crearPersona= (nombre, apellido) => {
    return{nombre,apellido}

}
*/

//Reducir aun más
//Para este caso los parentesis, lo que hacen es indicarle a JS lo que quieren
//regresar lo que esta dentro de estos parentesis como un objeto
const crearPersona= (nombre, apellido) => ({nombre,apellido});


const persona = crearPersona('Juan Carlos','Hernandez');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

//Si se quiere usar con una function de flechas y utilizar los argumentos
//se debe hacer de la siguiente forma:
const imprimeArgumentos2 = (anios,...args) => {
    //console.log(args);
    return args;
}
//..., esto es el parametro rest, para que se puedan ver todos los argumentos que
//estamos pasando.Despues del parametro rest no puede aisganr nada mas
//y si colocan un valor antes del rest, se creara su propio valor independiente

imprimeArgumentos(10,true,false,'Jc','hola');
const argumentos2 = imprimeArgumentos2(101,true,false,'Jc2','hola2');
//console.log({argumentos2});
//Se puede guardar en un arreglo asignando nombre

const [casado, vivo,nombre,saludo] = imprimeArgumentos2(101,true,false,'Jc2','hola2');
console.log({casado, vivo,nombre,saludo});

//DESTRUCTURACION de los argumentos

let tony = {
	//Nombre es la LLAVE, lo que esta despues de los puntos es el valor de la llave
	nombre: 'Tony Stark',
	codeName:'Iron Man',
	vivo: false,
	edad:40,
	trajes:['Mark I','Mark V','HulkBuster'],
	
};
/*
const imprimePropiedades = ( personaje ) => {
    console.log('Nombre',personaje.nombre);
    console.log('Code name',personaje.codeName);
    console.log('vivo',personaje.vivo);
    console.log('Edad',personaje.edad);
    console.log('Trajes',personaje.trajes);
};
*/

//desestructuracion de argumentos
const imprimePropiedades = ( {nombre,codeName,vivo,edad=0,trajes} ) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
};


imprimePropiedades(tony);