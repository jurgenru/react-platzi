//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "../hooks/useLocaStorage";
/*Haremos etiqueta de apertura y cierra de todo list para enviar cada
uno de los todos que vayan creando nuestros usuarios. A nuestro TodoItem
no tendra contenido dentro nosotros le enviaremos props para cambiar el
contenido*/
//Modal para crear todos
//Para mostrar varios todos necesitamos recorrer un array y con esto nos devolvera
//gracias a nuestros todos un TodoItem

//creamos un array con objetos dentro
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Termina la universidad", completed: false },
//   { text: "Cortarme el pelo", completed: false },
//   { text: "Estudia react", completed: true },
//   { text: "Aprender react", completed: false },
// ];

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    /*todos[todoIndex] = {
      text: todos[todoIndex].text,
      completed: true 
    };*/
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // console.log("Render antes del use effect");

  // React.useEffect(() => {
  //   console.log("use effect");
  // }, [totalTodos]);

  // console.log("Render despues del use effect");

  return (
    <AppUI
      loading={loading}
      totalTodos={totalTodos}
      error={error}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodo={searchedTodo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
