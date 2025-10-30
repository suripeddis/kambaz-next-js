"use client";

import { Button, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todoReducer";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem>
      <Button onClick={() => dispatch(deleteTodo(todo.id))} id="wd-delete-todo-click">
        Delete
      </Button>
      <Button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click" className="ms-2">
        Edit
      </Button>
      <span className="ms-3">{todo.title}</span>
    </ListGroupItem>
  );
}
