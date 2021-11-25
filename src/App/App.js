//import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../components/TodoContext";
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
  // console.log("Render antes del use effect");

  // React.useEffect(() => {
  //   console.log("use effect");
  // }, [totalTodos]);

  // console.log("Render despues del use effect");

  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export default App;
