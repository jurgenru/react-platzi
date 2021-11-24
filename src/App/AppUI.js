import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodo,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <p>DESESPERATE HUBO UN ERROR</p>}
        {loading && <p>Estamos cargando no desesperes...</p>}
        {(!loading && !searchedTodo.length) && <p>Crea tu primer TODO...</p>}
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
