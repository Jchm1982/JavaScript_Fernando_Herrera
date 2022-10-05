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

class Heroe extends Persona{
    
    clan = 'sin clan';
    constructor(nombre,codigo,frase){
        //Super hace referencia a la clase que extiende directamente
        
        super(nombre,codigo,frase);

        this.clan = 'The Avengers'; 
    }
    quienSoy(){
        console.log(`Soy ${ this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

}

//const spiderman = new Persona('peter Parker','Spiderman','Tu amigo el hombre Araña');
//const spiderman = new Heroe();
const spiderman = new Heroe('peter Parker','Spiderman','Tu amigo el hombre Araña');
console.log(spiderman);
spiderman.quienSoy();
