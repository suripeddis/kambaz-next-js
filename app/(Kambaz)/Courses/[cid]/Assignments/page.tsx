/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import * as client from "../../client";
import { ListGroup, Button } from "react-bootstrap";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  points: number;
}

export default function AssignmentsPage() {
  const { cid } = useParams();
  const router = useRouter();

  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const loadAssignments = async () => {
    if (!cid) return;
    const list = await client.findAssignmentsForCourse(cid as string);
    setAssignments(list);
  };

  useEffect(() => {
    loadAssignments();
  }, [cid]);

  const onDelete = async (aid: string) => {
    await client.deleteAssignment(aid);
    setAssignments(assignments.filter((a) => a._id !== aid));
  };

  return (
    <div className="p-4 text-white">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="m-0">Assignments</h2>

        <Button
          variant="primary"
          onClick={() => router.push(`/Courses/${cid}/Assignments/Editor`)}
        >
          + Add Assignment
        </Button>
      </div>

      <ListGroup>
        {assignments.map((a) => (
          <ListGroup.Item
            key={a._id}
            className="bg-secondary text-white d-flex justify-content-between align-items-center p-3"
          >
            <div
              role="button"
              onClick={() =>
                router.push(`/Courses/${cid}/Assignments/Editor?id=${a._id}`)
              }
            >
              <b>{a.title}</b>
              <br />
              Due: {a.dueDate}
              <br />
              Points: {a.points}
            </div>

            <Button variant="danger" onClick={() => onDelete(a._id)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
