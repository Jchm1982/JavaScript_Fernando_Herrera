/*
Dias de semana se abre  a las 11 am,
pero los fines de semana abrimos a las  9 am
*/

//Entra a un sitio web, para consultar si esta abierot el dia de hoy...
const dia = 0;//0:Domingo..., 1:Lunes...
const horaActual = 10;

let horaApertura;
let mensaje;//Está abierto, Está cerrado, hoy abrimos a las XX

//if(dia === 0 || dia === 6){
/*   
if([0,6].includes( dia )){
   console.log('Fin de Semana');
   horaApertura =9;  
}else{
   console.log('Día de la semana');
   horaApertura =11;
}
*/
//Utilizando el operador ternario
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11 ;

/*
if(horaActual >= horaApertura){
   mensaje ='Está Abierto';
}else{
   mensaje=`Está cerrado, hoy abrimos a las ${ horaApertura}`;
}
*/
mensaje = (horaActual >= horaApertura) ? 'Está Abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura}` ;


console.log({horaApertura,mensaje});