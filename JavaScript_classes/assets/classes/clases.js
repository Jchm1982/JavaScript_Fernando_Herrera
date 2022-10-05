class Persona {
    
    nombre = '';
    codigo = '';
    frase = ''; 

    constructor(nombre = 'Sin Nombre',codigo='Sin codigo',frase= 'Sin frase'){
        //El constructor es el unico metodo, que retorna una instancia de 
        //un objeto y no retirna UNDEFINE
        //console.log('Hola !');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
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
console.log(spiderman);
console.log(ironman);


spiderman.miFrase();
ironman.miFrase();