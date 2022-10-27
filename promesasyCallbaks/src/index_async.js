//import { promesaLenta,promesaMedia,promesaRapida} from './js/promesas';
import { buscarHeroe,buscarHeroeAsync } from './js/promesas';

// promesaLenta.then(console.log);
// //promesaMedia.then(mensaje=> console.log(mensaje));
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

// Promise.race([promesaLenta,promesaMedia,promesaRapida])
//             .then(mensaje => console.log(mensaje));

buscarHeroe('capitan')
           .then(heroe => console.log(heroe))
           .catch(console.warn);

buscarHeroeAsync('iron')
           .then(heroe => console.log(heroe))
           .catch(console.warn);