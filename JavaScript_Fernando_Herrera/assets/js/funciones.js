//Se le puede conocer que es un metodo
//esbuena practica que las definiciones de las funciones esten primero que el llamado
//FORMA TRADICIONAL DE CREAR FUNCIONES
function saludar(){
   //Un metodo es una funcion que se encuentra dentro de un objeto
   console.log('Hola Mundo');
}

//OTRA FORMA DE CREAR FUNCION
//La funcion que esta despues del = se le conoce como funcion anonima
//El beneficio de hacerlo de esta manera, es que no puede ser reutilizado en mi apliacion
//const saludar2  = function(){
//   console.log('Hola Mundo 2');
//}

//Otra informacion importante qe tienen las funciones, son los argumentos (en este ejemploes nombre)
//Cuando tenemos una variable y no esta inicializada se mostrara como UNDEFINED
function saludar3(nombre){   
   console.log('Hola '+ nombre);
}

//En caso de que se mande argumentos y no estendeclarados en la funcion se pueden utilizar, ya que se asignan de forma definida a los argumentos, solo las funciones tradicionales, y estan en un objeto implicito llamada ARGUMENTS(y hace referencia a todos los elementos que se enviaton a la funcion)
function saludar4(nombre){   
   console.log(arguments);
   console.log('Hola '+ nombre);
}

//FUNCIONES DE FLECHA
const saludarFlecha = ()=>{
   console.log('Hola Flecha');
}

//FUNCIONES DE FLECHA CON ARGUMENTOS
//Los parentesis se pueden colocar o no
const saludarFlecha2 = (name)=>{
   console.log('Hola ' + name);
}


//ES IMPORTANTE QUE NUESTRA FUNCION SIEMPRE TENGA UN RETORNO, YA QUE SI NO, NO REGRESARA LA INFORMCION NECESARIA
function saludar5(nombre){   
   //console.log('Hola '+ nombre);
   //Con el return se puede regresar calquier cosa
   //return 101;
   return [1,2,3,4,5];
   //Este codigo no se ejecutara ya que esta despues de n return
   console.log('Hola '+ nombre);
}
const retornoDeSaludar = saludar5('Juan C5',40,true,'Mexico');
console.log(retornoDeSaludar);


saludar();
//saludar2();
saludar3('Juan C');
saludar4('Juan C2',40,true,'Mexico');
saludarFlecha();
saludarFlecha2('Benito');


//COMO FUNCIONAN LOS RETURN
function sumar (a,b){
   return a + b;
   //return 'Hola Mundin';
}

//HACERLO CON UNA FUNCION DE FLECHA
//const sumar2 = (c,d)=>{
//   return c+d;
//}
//LA FUNCION ANTERIOR SE PUEDE RESUMIR DE LA SIGUIENTE FORMA SOLO CUANDO SE TIENE UN SOLO RETURN
const sumar2 = (c,d)=> c + d;


console.log(sumar (2,3));
console.log(sumar2 (6,7));

function getAleatorio(){
   return Math.random();
}
//FUNCION DE FLECAH QUE NO TENGA LLAVES

const getAleatorio2 = () => Math.random(); 

console.log( getAleatorio() );
console.log( getAleatorio2() );