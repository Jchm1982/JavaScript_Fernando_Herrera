const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

while( i < carros.length ){
   console.log( carros[i] );
   //i = i+ 1;
   i++;
}

/*
unefined -> Se concidera Falso
null
false
*/

console.warn('Do While');
let j = 0;
do{
console.log(carros[j]);
j++;
}while( carros[j] ); º