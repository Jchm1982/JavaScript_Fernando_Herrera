import { buscarHeroeAsync,buscarHeroe } from "./promesas";

const heroesIds = ['capitan','iron','spider'];

export const obtenerHeroesArr = async() => {
    // const heroesArr = [];
    // for( const id of heroesIds){
    //     //buscarHeroeAsync(id).then(heroe => heroesArr.push(heroe));
    //     heroesArr.push(buscarHeroe(id));
        
    // }
    
    // return await Promise.all(heroesArr);

    return await Promise.all(heroesIds.map( buscarHeroe ));


};