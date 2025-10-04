"use client";

import { useParams } from "next/navigation";
import { Form, FormGroup, FormLabel, FormControl, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function EditAssignment() {
  const { cid, aid } = useParams() as { cid: string; aid: string };

  return (
    <div id="wd-edit-assignment" className="p-3">
      <h1 className="mb-3">Assignments &raquo; {aid}</h1>

      <Form style={{ maxWidth: 900 }}>
        <FormGroup className="mb-3" controlId="assignmentName">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl defaultValue={aid} />
        </FormGroup>

        <FormGroup className="mb-3" controlId="assignmentDescription">
          <FormLabel>Description</FormLabel>
          <FormControl as="textarea" rows={6} placeholder="Describe the assignment..." />
        </FormGroup>

        <Row className="mb-3">
          <Col md={4}>
            <FormGroup controlId="points">
              <FormLabel>Points</FormLabel>
              <FormControl type="number" defaultValue={100} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup controlId="availableFrom">
              <FormLabel>Available From</FormLabel>
              <FormControl type="datetime-local" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup controlId="dueDate">
              <FormLabel>Due</FormLabel>
              <FormControl type="datetime-local" />
            </FormGroup>
          </Col>
        </Row>

        <div className="d-flex gap-2">
          <Button variant="primary">Save</Button>
          <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">
            Cancel
          </Link>
        </div>
      </Form>
    </div>
  );
}
