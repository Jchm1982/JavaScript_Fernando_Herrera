// import {obtenerHeroesArr, obtenerHeroeAwait} from './js/await';

// console.time('await'); 

// obtenerHeroeAwait('capitan1').then( heroe => {
//     console.log(heroe);

//     console.timeEnd('await');
// }).catch(console.warn);

import {heroesCiclo,heroeIfAwait} from './js/await';

heroesCiclo();

heroeIfAwait('iron');
