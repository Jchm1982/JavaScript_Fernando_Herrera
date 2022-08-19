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