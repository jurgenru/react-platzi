import React from "react";
import { TodoContext } from "../components/TodoContext";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";

function AppUI() {
  const { error, loading, searchedTodo, completeTodo, deleteTodo } =
    React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>DESESPERATE HUBO UN ERROR</p>}
        {loading && <p>Estamos cargando no desesperes...</p>}
        {!loading && !searchedTodo.length && <p>Crea tu primer TODO...</p>}
        {searchedTodo.map((todo) => (
          <TodoItem
            text={todo.text}
            key={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export { AppUI };
