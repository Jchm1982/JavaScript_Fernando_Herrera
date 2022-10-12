
import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


//const nombre = 'Juan Carlos';
export const todoList = new TodoList(); 

const tarea = new Todo('Aprender JavaScript !!');
//const tarea2 = new Todo('Comprar Unicornio');
todoList.nuevoTodo(tarea);
//todoList.nuevoTodo(tarea2);
console.log(todoList);

crearTodoHtml( tarea );