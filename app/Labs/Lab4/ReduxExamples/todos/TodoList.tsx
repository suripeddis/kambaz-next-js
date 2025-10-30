"use client";

import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import type { RootState } from "../../store";

export default function TodoList() {
  const { todos } = useSelector((s: RootState | any) => s.todosReducer);

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((t: any) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
