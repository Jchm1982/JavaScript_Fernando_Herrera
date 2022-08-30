/*
const elMayor = ( a,b ) => {
   return ( a > b ) ? a : b ; 
}
*/
const elMayor = ( a,b ) => ( a > b ) ? a : b ; 

const tieneMembresia = ( miembro ) => ( miembro ) ? '2 Dolares' : '10 Dolares';

console.log(elMayor(10,15));
console.log(tieneMembresia(false));

const amigo = false;
const amigoArr = [
   'peter',
   'tony',
   'Dr. Strange',
   amigo ? 'Thor' : 'loki',
   //(() => 'Nick Fury')()
   elMayor(10,15)
];

console.log(amigoArr);

const nota = 85;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 75 ? 'C'  : 'F';

console.log({ nota, grado });