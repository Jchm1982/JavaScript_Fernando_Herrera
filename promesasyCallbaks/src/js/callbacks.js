const heroes = {
    capitan:{
        nombre:'Capitan america',
        poder:'Super Soldado'
    },
    iron:{
        nombre:'Iron Man',
        poder:'Millonario'
    },
    spider:{
        nombre:'Spiderman',
        poder:'Poderes de Araña'
    }

}

export const buscarHeroe = (id,callback) =>{
    
    const heroe = heroes[id];
    if(heroe){
        callback(null,heroe);
    }else{
        //Un error
        callback(`No existe un Hereo con el ID ${id}`);
    }
    //callback(heroe);
};