/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Button } from "react-bootstrap";
import { add } from "./addReducer";
import type { RootState } from "../../store"; 

export default function AddRedux() {
  const [a, setA] = useState<number>(12);
  const [b, setB] = useState<number>(23);

  const { sum } = useSelector((state: RootState | any) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div className="w-25" id="wd-add-redux">
      <h1>Add Redux</h1>
      <h2>
        {a} + {b} = {sum}
      </h2>

      <FormControl
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value || "0", 10))}
        className="mb-2"
      />

      <FormControl
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value || "0", 10))}
        className="mb-2"
      />

      <Button
        id="wd-add-redux-click"
        onClick={() => dispatch(add({ a, b }))}
      >
        Add Redux
      </Button>
      <hr />
    </div>
  );
}
