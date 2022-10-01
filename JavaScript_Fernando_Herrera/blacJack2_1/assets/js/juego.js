/*
SINTAXIS DEL PATRON MODULO
(() => {
   'use strict' //Hay que validar todo lo que se hace con el modo estricto
   const personajes = ['Ana','Mary','Mei']
   console.log(personajes);

})();
*/
const miModulo = (() => {
   let deck = [];
   const tipos = ['C','D','H','S'],
         especiales = ['A','J','Q','K'];

   //let puntosJugador = 0,
   //    puntosComputadora = 0;
   let puntosJugadores = [];

   //Referencias de HTML
   const btnPedir = document.querySelector("#btnPedir"),
         btnDetener = document.querySelector("#btnDetener"),
         btnNuevo = document.querySelector("#btnNuevo");

         /*
   const divCartasJugador = document.querySelector("#jugador-cartas"),
         divCartasComputadora = document.querySelector("#computadora-cartas"),
         puntosHTML = document.querySelectorAll('small');
      */
   const divCartasJugadores = document.querySelectorAll('.divCartas'),
         puntosHTML = document.querySelectorAll('small');

   //FUNCION QUE INICIALIZA EL JUEGO
   const inicializarJuego = ( numJugadores = 2 ) => {
      deck = crearDeck();
      
      puntosJugadores=[];
      for( let i = 0; i < numJugadores; i++){
         puntosJugadores.push(0);
      }
      //console.log({puntosJugadores})
      /*
      deck = [];
      deck=crearDeck();
      
      
      puntosJugador = 0;
      puntosJugador = 0;
      */
     puntosHTML.forEach(elem => elem.innerText = 0);
     divCartasJugadores.forEach(elem => elem.innerHTML='');
      //puntosHTML[0].innerText = 0;
      //puntosHTML[1].innerText = 0;

      //divCartasComputadora.innerHTML = '';
      //divCartasJugador.innerHTML = '';
      
      btnPedir.disabled = false;
      btnDetener.disabled = false;
      
   }

   //Esta funcion crea una nueva baraja
   const crearDeck = () => {
      deck=[];

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
      /*
      //console.log( deck );//Deck ordenado
      deck = _.shuffle(deck);
      console.log( deck );
      return deck;
      */
     
      return _.shuffle(deck);
   }
   //crearDeck();
   

   //Esta funcion permite PEDIR una carta
   const pedirCarta = () => {
      if(deck.length === 0 ){
         throw 'No hay cartas en el deck';
      }
      //const carta = deck.pop();
      /*
      console.log(deck);
      console.log(carta);//La carta debe ser de la baraja
      */ 
      //return carta;
      return deck.pop();
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

   //Reduccion del ejercicio y sirve para obtener el valor de la carta
   const valorCarta = ( carta ) => {
      const valor= carta.substring(0, carta.length-1);
      return ( isNaN(valor) ) ? 
            (valor==='A') ? 11 : 10
            : valor * 1;
   }
   
   //Aqui se van a acumular los puntos del jugador
   //Turno 0 = primer Jugador, y el ulimo será la computadora
   const acumularPuntos = ( carta,turno) =>{
         puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
         puntosHTML[turno].innerText = puntosJugadores[turno];
         return puntosJugadores[turno];

   }
   const crearCarta = (carta,turno) =>{
         const imgCarta = document.createElement('img');
         imgCarta.src = `assets/cartas/${ carta }.png`;
         imgCarta.classList.add('carta'); 
         divCartasJugadores[turno].append( imgCarta );
         //divCartasComputadora.append(imgCarta);
   }

   const determinarGanador = () =>{

      const [puntosMinimos, puntosComputadora] = puntosJugadores;

      setTimeout(() => {
         if( puntosComputadora === puntosMinimos){
            alert('Nadie Gana :(');
         }else if( puntosMinimos > 21){
            alert('Computadora Gana ');
         }else if( puntosComputadora > 21){
            alert('Jugador Gana ');
         }else{
            alert('Computadora Gana');
         }
      },100);
   }


   //Este es el turno de la computadora
   const turnoComputadora = (puntosMinimos) => {
      let puntosComputadora = 0;
      do {
         const carta = pedirCarta();
         puntosComputadora = acumularPuntos(carta,puntosJugadores.length - 1);
         crearCarta(carta,puntosJugadores.length - 1);

          /*
         puntosComputadora = puntosComputadora + valorCarta( carta );
         puntosHTML[1].innerText = puntosComputadora;
         */
         //<img class="carta" src="assets/cartas/10H.png"></img>

         /*
         const imgCarta = document.createElement('img');
         imgCarta.src = `assets/cartas/${ carta }.png`;
         imgCarta.classList.add('carta'); 
         divCartasComputadora.append(imgCarta);
         */
         /*
         if(puntosMinimos > 21){
            break;
         }
         */
      } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

      determinarGanador();
      
      
   }

   //const valor = valorCarta( pedirCarta() );
   //console.log ({valor});

   //Eventos
   btnPedir.addEventListener('click',() => {
         
         const carta = pedirCarta();
         const puntosJugador = acumularPuntos(carta, 0 );
         crearCarta(carta,0);
         /*
         puntosJugador = puntosJugador + valorCarta( carta );
         puntosHTML[0].innerText = puntosJugador;
         */

         //<img class="carta" src="assets/cartas/10C.png" alt="">
         /*
         const imgCarta = document.createElement('img');
         imgCarta.src = `assets/cartas/${ carta }.png`;
         imgCarta.classList.add('carta'); 
         divCartasJugador.append(imgCarta);
         */

         //Controlar los puntos
         if( puntosJugador > 21){
            console.warn('Ya perdiste')
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
            
            //alert();
         }else if(puntosJugador === 21){
            console.warn('21, Genial');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
            
         }
   });


   btnDetener.addEventListener('click',() => {
         btnPedir.disabled = true;
         btnDetener.disabled = true;
         turnoComputadora(puntosJugador);
   });

   //btnNuevo.addEventListener('click',() =>{
   //   //console.clear();
   //   inicializarJuego();
     
   //});

   return {
      nuevoJuego: inicializarJuego
   };

})();