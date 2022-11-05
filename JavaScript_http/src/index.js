//import { obtenerChiste  } from './js/http_provider';
//import { init } from "./js/chistes_page";

//import { obtenerUsuarios  } from './js/http_provider';
//import { init } from './js/usuarios_page';

import * as CRUD from './js/crud_provider';
//init();

//CRUD.getUsuario( 1 ).then( console.log);
/*
CRUD.crearUsuario({
    name:'JC',
    job:'Construccion'
}).then(console.log);
*/
// CRUD.actualizarUsuario(1,{
//     name: 'Mellisa',
//     job: 'developer'
// }).then(console.log);

CRUD.borrarUsuario(1).then(console.log);