export class Todo{
    constructor(tarea){
        this.tarea = tarea;

        this.id = new Date().getTime(); //23456789
        this.completado = false;
        this.creado = new Date();
    }
}