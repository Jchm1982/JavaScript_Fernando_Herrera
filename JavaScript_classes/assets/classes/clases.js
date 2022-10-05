class Persona {
    static _conteo = 0;
    static get getConteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre); //Undefined
        console.log('Hola a todos, soy un metodo statico');
    }
    
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin Nombre',codigo='Sin codigo',frase= 'Sin frase'){
        //El constructor es el unico metodo, que retorna una instancia de 
        //un objeto y no retirna UNDEFINE
        //console.log('Hola !');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    //Para establecer algun valor
    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    //Recupera una propiedad construida
    get getComidafavorita (){
        return `La comida favorita ${ this.nombre } es ${ this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${ this.codigo }`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`Soy ${this.codigo} dice ${ this.frase }`);
    }
}

const spiderman = new Persona('peter Parker','Spiderman','Tu amigo el hombre Araña');
const ironman = new Persona('Tony Stark','Ironman','Soy un genio de la tecnologia');
//console.log(spiderman);
//console.log(ironman);


spiderman.miFrase();
//ironman.miFrase();
spiderman.setComidaFavorita = 'Postre de la tia Mey';
//spiderman.nemesis = 'Venom';
//console.log(spiderman.getComidafavorita);
//console.log(spiderman);
//Persona._conteo = 2;
console.log(`Conteo Statico`, Persona._conteo);
console.log(Persona.getConteo);
Persona.mensaje();

//Se puede trabajar con metodos estaticos
Persona.propiedadExterna = 'Hello World';
console.log(Persona.propiedadExterna);
console.log(Persona);