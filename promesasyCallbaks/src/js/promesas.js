const heroes = {
    capitan:{
        nombre:'Capitan america',
        poder:'Super Soldado'
    },
    iron:{
        nombre:'Ironman',
        poder:'Millonario'
    },
    spider:{
        nombre:'Spiderman',
        poder:'Poderes de Araña'
    }

}

export const buscarHeroe = ( id ) => {
    const heroe = heroes[id];

    // //Aqui se crea la promesa
    // const promesa = new Promise();

    // //Aqui se regresa la promesa
    // return promesa;

    //Lo anterior se hace de la siguiente forma
    //Las promesas reciben 2 argumentos(son opcionales)
    return new Promise( (resolve,reject) =>{
        if(heroe){
            setTimeout( () => resolve(heroe),1000);
            
        }else{
            reject(`No existe un Hereo con el ID ${id}`);
        }

    });


}
//Forma con Async
export const buscarHeroeAsync = async( id ) => {
    const heroe = heroes[id];

        if(heroe){
            return heroe;
        }else{
            //reject(`No existe un Hereo con el ID ${id}`);
            throw `No existe un Hereo con el ID ${id}`;//Tradicional
        }

}


const promesaLenta = new Promise( (resolve,reject) =>{
    setTimeout(()=> resolve('Promesa Lenta'),2000);
});

const promesaMedia = new Promise( (resolve,reject) =>{
    setTimeout(()=> resolve('Promesa Media'),1500);
});

const promesaRapida = new Promise( (resolve,reject) =>{
    setTimeout(()=> resolve('Promesa Rapida'),1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}