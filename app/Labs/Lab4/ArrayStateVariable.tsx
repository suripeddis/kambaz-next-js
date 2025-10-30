"use client";

import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import type { RootState } from "./store";

export default function ArrayStateVariable() {
  // your local example array state (kept simple)
  const [numbers] = useState([1, 2, 3, 4]);
  // read todos from redux
  const { todos } = useSelector((s: RootState | any) => s.todosReducer);

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>

      <h4>Local numbers</h4>
      <ListGroup className="mb-3">
        {numbers.map((n) => (
          <ListGroupItem key={n}>{n}</ListGroupItem>
        ))}
      </ListGroup>

      <h4>Todos from Redux</h4>
      <ListGroup>
        {todos.map((t: any) => (
          <ListGroupItem key={t.id}>{t.title}</ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
