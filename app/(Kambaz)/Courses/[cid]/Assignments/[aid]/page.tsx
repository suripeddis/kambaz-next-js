"use client";

import { useParams } from "next/navigation";
import assignments from "../../../../Database/assignment.json";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find(
    (a: any) => a._id === aid && a.course === cid
  );

  if (!assignment) {
    return <p className="text-danger">Assignment not found.</p>;
  }

  return (
    <div id="wd-assignment-editor" className="container mt-3">
      <h3 className="text-danger">Edit Assignment</h3>
      <Form>
        {/* Assignment Title */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment Title</Form.Label>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Form.Group>

        {/* Assignment ID */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment ID</Form.Label>
          <Form.Control type="text" defaultValue={assignment._id} readOnly />
        </Form.Group>

        {/* Course ID */}
        <Form.Group className="mb-3">
          <Form.Label>Course</Form.Label>
          <Form.Control type="text" defaultValue={assignment.course} readOnly />
        </Form.Group>

        {/* Save / Cancel Buttons */}
        <div className="d-flex justify-content-end gap-2 mt-4">
          <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">
            Cancel
          </Link>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}