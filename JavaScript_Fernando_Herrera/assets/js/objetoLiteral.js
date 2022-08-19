//Cuando se tengan llaves es un objeto
let personaje = {
	//Nombre es la LLAVE, lo que esta despues de los puntos es el valor de la llave
	nombre: 'Tony Stark',
	codeName:'Iron Man',
	vivo: false,
	edad:40,
	cordenadas:{
		lat:34.034,
		lang:-118.79
	},
	trajes:['Mark I','Mark V','HulkBuster'],
	direccion:{
		zip:'10880,90265',
		ubicacion:'Malibu, California'
	},
	'ultima pelicula':'Infinity War'
};
console.log(personaje);
//Se hace referencia al valor de la propiedad personaje.nombre
console.log('Nombre',personaje.nombre);
//Hay Varias formas de acceder a las propiedades
console.log('Nombre2',personaje['nombre']);
console.log('Edad',personaje.edad);
console.log('Coordenadas',personaje.cordenadas);
console.log('latitd',personaje.cordenadas.lat);
console.log('No trajes',personaje.trajes.length);
console.log('Ultimo traje',personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo ?',personaje[x]);
console.log('Ultima Pelicula',personaje['ultima pelicula']);


//############## MAS DETALLES ##############
//BORRAR UNA PROPIEDAD
//personaje.edad = null;
delete personaje.edad;

//crear una nueva propiedad en el objeto
personaje.casado = true;


//TRABAJAR NUESTRO OBJETO COMO UN ARREGLO
const entriePares = Object.entries( personaje );
console.log(entriePares);

//Para el bloqueo de las propiedades o las modificaciones
/*Nota:Congela las asignaciones a c/u de las propeidades, pero no a los objetos
que estan dentro de ese objeto, el ejmplo se puede cambiar la cordenadas.lat
*/

Object.freeze(personaje);

personaje.dinero = 1000000;
personaje.casado = false;
console.log(personaje);

//Necesito un listado de todas las propiedades que tiene ese objeto
const propiedades = Object.getOwnPropertyNames( personaje);
//Necesito un listado de todas las propiedades que tiene ese objeto, y tambien los valores
const valores = Object.values( personaje);
console.log({ propiedades, valores });

/*
URL DE APOYO

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
*/