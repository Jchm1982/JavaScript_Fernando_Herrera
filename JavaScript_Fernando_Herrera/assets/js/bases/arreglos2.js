let juegos =['Zelda','Mario','Don king kong','KoF'];
console.log('largo: ',juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({ primero,ultimo});

juegos.forEach( (elemento,indice,arr) => {
	console.log({ elemento,indice,arr });
});

//Añadir un juego al final del arreglo
let nuevaLongitud = juegos.push( 'Mortal Kombat');
console.log({nuevaLongitud,juegos});

//Añadir un juego al principio del arreglo
nuevaLongitud =juegos.unshift('Marvel vs Capcom');
console.log({nuevaLongitud,juegos});

//Borrar un juego al del final
let jueoBorado = juegos.pop();
console.log({jueoBorado,juegos});

//Borrar un juego en cierta posicion del arreglo
let pos = 1;
let juegosBorrados = juegos.splice(pos,2);
console.log({juegosBorrados,juegos});

//Saber la posicion indice de un juego
let mIndex = juegos.indexOf('Don king kong');
console.log({mIndex});