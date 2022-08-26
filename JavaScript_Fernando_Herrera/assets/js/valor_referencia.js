let a = 10;
let b = a;
a = 30;

console.log({a,b});

//Todo pase por referencia
//para JS todos los objetos son pasados por referencia
//para JS todos son objetos menos los primitivos AQUI HAY UN PROBLEMA
let juan = { nombre:'Juan'};
//Cando se qiuere una copia de un objeto simplemente el objeto se debe colocar entre llaves y existe un operador especial para separar todas las propiedades y valores de un objeto, es el operador spred ...
let gris =  { ...juan };
gris.nombre= 'Grisel';
console.log({juan,gris});
/*
La diferencia entre rest y spreed, cuando se coloca como argumento despues de los
parentesis (...persona)=esto quiere decir que una todos los argumentos en una sola variable
y transformalo como un arreglo. Y si se utiliza fuera de los parentesis, es el operador
spred y simboliza que separe los argumentos y asi rompe la referecia que hay en JS y de
esta manera se puede trabajar objetos y hacer igualaciones que apunten diferentes espacios
en memoria
*/

//EJEMPLO
/*
const cambiaNombre = (persona)=>{
   persona.nombre = 'Tony';
   return persona;
};
*/
//Resolucion
const cambiaNombre = ({...persona})=>{
   persona.nombre = 'Tony';
   return persona;
};

let peter = {nombre:'Peter'};
let tony = cambiaNombre( peter);
console.log({peter,tony});

//ARREGLOS
const frutas = ['Manzana', 'Pera','Piña'];
//Ejemplo
//const otrasFrutas = frutas;

//Solucion
//const otrasFrutas = [...frutas];

//Solucion2
/*
Slice es un metodo que vienen en los arreglos y su accion es cortar el arreglo y regresa los elementos que yo especifico, si no se manda ningun argumento, esto regresara un 
nuevo arreglo rompiendo dicha relacion
*/ 
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');
console.table({frutas,otrasFrutas});