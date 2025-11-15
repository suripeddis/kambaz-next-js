import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const API = `${HTTP_SERVER}/lab5/todos`;

export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      {/* 5.2.4.1 Retrieving Arrays */}
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />

      {/* 5.2.4.2 Retrieving by ID */}
      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <FormControl
        id="wd-todo-id"
        className="w-50"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <br />
      <br />
      <hr />

      {/* 5.2.4.3 Filtering with query string */}
      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />

      {/* 5.2.4.4 Creating new items */}
      <h4>Creating new Items in an Array</h4>
      <a
        id="wd-create-todo"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />

      {/* 5.2.4.5 Removing from array */}
      <h4>Removing from an Array</h4>
      <a
        id="wd-remove-todo"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}
      </a>
      <FormControl
        id="wd-todo-id-to-remove"
        className="w-50"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <br />
      <br />
      <hr />

      {/* 5.2.4.6 Updating title */}
      <h4>Updating an Item in an Array</h4>
      <a
        id="wd-update-todo-title"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Todo Title
      </a>
      <FormControl
        id="wd-todo-id-to-update"
        className="w-25 float-start me-2"
        defaultValue={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <FormControl
        id="wd-todo-title"
        className="w-50 float-start"
        defaultValue={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <br />
      <hr />

      {/* 5.2.4.7 On your own – description */}
      <h4>Updating Description</h4>
      <a
        id="wd-update-todo-description"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/description/${encodeURIComponent(
          todo.description
        )}`}
      >
        Update Description
      </a>
      <FormControl
        id="wd-todo-description"
        className="w-75"
        defaultValue={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <br />
      <br />
      <hr />

      {/* 5.2.4.7 On your own – completed */}
      <h4>Updating Completed Property</h4>
      <a
        id="wd-update-todo-completed"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completed
      </a>
      <div className="form-check w-50">
        <input
          id="wd-todo-completed"
          className="form-check-input"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
        />
        <label className="form-check-label" htmlFor="wd-todo-completed">
          Completed
        </label>
      </div>
      <br />
      <hr />
    </div>
  );
}
