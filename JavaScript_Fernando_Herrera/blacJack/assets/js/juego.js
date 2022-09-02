/*
2C = Two of Clubs 
2D = Two of Diamonds 
2H = Two of Hearts 
2S = Two of Spades 
*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

//Esta funcion crea una nueva baraja

const crearDeck = () => {
   for( let i = 2; i<= 10; i++){
      for(let tipo of tipos){
         deck.push( i + tipo);
      }
   }
   for(let tipo of tipos){
      for(let esp of especiales){
         deck.push( esp + tipo);
      }
   }
   //console.log( deck );//Deck ordenado
   deck = _.shuffle(deck);
   console.log( deck );
   return deck;
}

crearDeck();

//Esta funcion permite tomar una carta

const pedirCarta = () => {
   if(deck.length === 0 ){
      throw 'No hay cartas en el deck';
   }
   const carta = deck.pop();

   console.log(deck);
   console.log(carta);//La carta debe ser de la baraja
   return carta;
}
/*
//Medida de seguridad
for(let i =0;i<=55;i++){
   pedirCarta();
}
*/
//pedirCarta();

/*
const valorCarta = ( carta ) => {
   //const valor= carta[0];
   const valor= carta.substring(0, carta.length-1);
   let puntos = 0;
   //console.log({valor});
   //isNaN -> sirve para saber si es un numero
   if( isNaN( valor )){
      puntos = (valor === 'A') ? 11 : 10;
      //console.log('No es un numero');
   }else{
      //console.log('Es un numero');
      puntos = valor * 1;
   }
   console.log(puntos);
}
*/
//Reduccion del ejercicio
const valorCarta = ( carta ) => {
   
   const valor= carta.substring(0, carta.length-1);
   return ( isNaN(valor) ) ? 
         (valor==='A') ? 11 : 10
          : valor * 1;
}

const valor = valorCarta( pedirCarta() );
console.log ({valor});