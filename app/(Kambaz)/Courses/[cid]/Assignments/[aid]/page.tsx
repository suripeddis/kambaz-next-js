"use client";

import { useParams } from "next/navigation";
import assignmentsData from "../../../../Database/assignment.json";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";

type Assignment = {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;       
  availableDate?: string; 
};

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();

  const assignments = assignmentsData as Assignment[];
  const assignment = assignments.find((a) => a._id === aid);

  if (!assignment) {
    return <p className="text-danger">Assignment not found.</p>;
  }

  return (
    <div id="wd-assignment-editor" className="container mt-3">
      <h3 className="text-danger">{assignment.title}</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            defaultValue={assignment.description ?? ""}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            defaultValue={assignment.points ?? 100}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" defaultValue={assignment.dueDate ?? ""} />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Available From</Form.Label>
          <Form.Control
            type="date"
            defaultValue={assignment.availableDate ?? ""}
          />
        </Form.Group>

        <div className="d-flex justify-content-end gap-2">
          <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">
            Cancel
          </Link>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}