/*
import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';


export const saludar = ( nombre = 'sin nombre' ) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ nombre }`;

    document.body.append( h1 );

    
    // Img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );
}
*/
import { Todo } from '../classes';

import { todoList } from '../index';

//Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = ( todo ) => {
    const htmlTodo = `
        <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'cheked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        </li>`;
        
        //creamos el elemento html
        const div = document.createElement('div');
        div.innerHTML = htmlTodo;

        divTodoList.append(div.firstElementChild);

        return div.firstElementChild;
}

//EVENTOS
txtInput.addEventListener('keyup',(event) =>{
    //console.log(event);
    if(event.keyCode=== 13 && txtInput.value.length >0 ){
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        //console.log(todoList);
        crearTodoHtml( nuevoTodo );
        txtInput.value='';
    }

});

divTodoList.addEventListener('click',(event)=>{
    //console.log('click');
    const nombreElemento =  event.target.localName; //puede ser un input,label o button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    //console.log(todoElemento);
    //console.log(todoId);
    if(nombreElemento.includes('input')){//click en el check
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');
    }else if(nombreElemento.includes('button')){//Con esto es por que hay que borrar el todo
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild(todoElemento);
    }
    console.log(todoList);
});

btnBorrar.addEventListener('click',()=>{
        todoList.eliminarCompletados();
        for(let i =divTodoList.children.length-1; i>=0; i--){

            const elemento =divTodoList.children[i];

            if(elemento.classList.contains('completed')){
                divTodoList.removeChild(elemento);
            }
            
        }
});

ulFiltros.addEventListener('click',(event) =>{
    
    const filtro = event.target.text;
        if(!filtro){ return; };
    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
            break;
            
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
            break;
        }
    }
});