//import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
/*Haremos etiqueta de apertura y cierra de todo list para enviar cada
uno de los todos que vayan creando nuestros usuarios. A nuestro TodoItem
no tendra contenido dentro nosotros le enviaremos props para cambiar el
contenido*/
//Modal para crear todos
//Para mostrar varios todos necesitamos recorrer un array y con esto nos devolvera
//gracias a nuestros todos un TodoItem

//creamos un array con objetos dentro
const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Termina la universidad", completed: false },
  { text: "Cortarme el pelo", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
