//Estructuras de control
let a = 9;


if( a >= 10 ){
   console.log('A es mayor o igual a 10');
}else{
   console.log('A es menor a 10');
}

//console.log('Fin de programa');
const hoy = new Date();//{}
let dia = hoy.getDay();//0:Domingo,1:Lunes,2:Martes....

console.log({dia});

if(dia === 0){
   console.log('Domingo');
}else if(dia === 1){
   console.log('Lunes');
}else if(dia === 2){
   console.log('Martes');
}else{
   console.log('No es Domingo, Lunes ni Martes');
}

//Sin usar if else, o switch, unicamente objetos

dia = 3;

//Dia de la semana

const diaLetras ={
   0:'Domingo',
   1:'Lunes',
   2:'Martes',
   3:'Miercoles',
   4:'Jueves',
   5:'Viernes',
   6:'Sabado'
};

console.log('El dia es:'+diaLetras[dia]);

//Ejercicio anterior con funcion
const diaLetras2 ={
   0:()=>'Domingo - 0',
   1:()=>'Lunes - 1',
   2:()=>'Martes - 2',
   3:()=>'Miercoles - 3',
   4:()=>'Jueves - 4',
   5:()=>'Viernes - 5',
   6:()=>'Sabado - 6'
};

console.log('El dia es:'+diaLetras2[dia]());

//Hacer con arreglos
const diaLetras3 =[
   'Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'
];

console.log('El dia es:'+diaLetras3[dia]);