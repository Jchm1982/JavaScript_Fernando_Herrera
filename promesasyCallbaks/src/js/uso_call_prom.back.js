import { buscarHeroe as buscarHerorCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId1 = 'capitan';
const heroeId2 = 'iron';

// //En este ejemplo la funcion se manda como un argumento
// buscarHeroe(heroeId1,(err,heroe1)=>{
//     //console.log('Callback llamado JC');
//     /*
//     if(err ){
//         console.error( err );
//     }else{
//         console.info(heroe);
//     }
//     */
//     if(err ){ return console.error( err ); }
//     buscarHeroe(heroeId2,(err,heroe2)=>{    
//         if(err ){ return console.error( err ); }
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });
// });


// **Este codigo se va a sustituir por otro**
// buscarHeroe(heroeId1).then(heroe1=>{
//     //console.log(`Enviando a ${heroe.nombre} a la mision`);
//     buscarHeroe(heroeId2).then(heroe2=>{
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     });
// });

//**promesas en paralelo */
Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)])
    .then( ([heroe1,heroe2]) =>{

        //console.log('promise.all',heroes);
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);

    }).catch( err => {

        alert(err);

    }).finally( () => {
        console.log('Se termino el promise.all');
    });


console.log('Fin de programa');