"use client";

import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todoReducer";
import type { RootState } from "../../store";

interface Todo {
  id?: string; 
  title: string;
}

export default function TodoForm() {
  const { todo } = useSelector((s: RootState) => s.todosReducer);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (todo.id) {
      // TypeScript now knows id is defined here
      dispatch(updateTodo({ id: todo.id, title: todo.title }));
    }
  };

  return (
    <ListGroupItem>
      <Button onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click">
        Add
      </Button>
      <Button
        onClick={handleUpdate}
        id="wd-update-todo-click"
        className="ms-2"
      >
        Update
      </Button>
      <FormControl
        className="mt-2"
        value={todo.title}
        onChange={(e) =>
          dispatch(setTodo({ ...todo, title: e.target.value }))
        }
      />
    </ListGroupItem>
  );
}
