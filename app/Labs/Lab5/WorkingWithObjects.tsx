"use client";

import { useEffect, useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import * as client from "./client"; // <-- adjust if needed

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    const load = async () => {
      const assignmentData = await client.getAssignment();
      setAssignment(assignmentData);

      const titleData = await client.getTitle();
      const t = titleData.title;
      setTitle(t);
      setNewTitle(t);
    };
    load();
  }, []);

  const handleUpdateTitle = async () => {
    const data = await client.updateTitle(newTitle);
    setTitle(data.title);
  };

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <div className="mb-3">
        <div>
          <strong>Current title:</strong> {title}
        </div>
        <div className="d-flex gap-2 mt-2">
          <FormControl
            value={newTitle || ""}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="New title"
          />
          <Button variant="primary" onClick={handleUpdateTitle}>
            Update Title
          </Button>
        </div>
      </div>

      <div className="mt-3">
        <strong>Assignment JSON:</strong>
        <pre className="mt-2">
          {assignment && JSON.stringify(assignment, null, 2)}
        </pre>
      </div>
      <hr />
    </div>
  );
}
