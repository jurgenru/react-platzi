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
const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Termina la universidad", completed: false },
  { text: "Cortarme el pelo", completed: false },
  { text: "Estudia react", completed: false },
  { text: "Aprender react", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodo = [];

  if (!searchValue.length >= 1) {
    searchedTodo = todos;
  } else {
    searchedTodo = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodo.map((todo) => (
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
