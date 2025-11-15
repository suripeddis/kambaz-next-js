"use client";
import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <FormControl id="wd-query-parameter-a" className="mb-2" type="number"
        defaultValue={a} onChange={(e) => setA(e.target.value)} />
      <FormControl id="wd-query-parameter-b" className="mb-2" type="number"
        defaultValue={b} onChange={(e) => setB(e.target.value)} />
      <a id="wd-query-parameter-add"
         href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <span className="mx-2" />
      <a id="wd-query-parameter-subtract"
         href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Subtract {a} - {b}
      </a>
      {/* Add multiply/divide links if you implemented those operations */}
      <hr />
    </div>
  );
}
