/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Button, FormControl, Form } from "react-bootstrap";
import { addAssignment, updateAssignment } from "../reducer";

export default function AssignmentEditor() {
  const { cid } = useParams<{ cid: string }>();
  const query = useSearchParams();
  const aid = query.get("aid");
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((s: any) => s.assignmentsReducer);

  const existing = (assignments || []).find((a: any) => a._id === aid);

  const [form, setForm] = useState<any>({
    _id: "",
    course: cid ?? "",
    name: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  useEffect(() => {
    if (existing) {
      setForm({
        _id: existing._id ?? "",
        course: cid ?? "",
        name: existing.name ?? "",
        description: existing.description ?? "",
        points: existing.points ?? 100,
        dueDate: existing.dueDate ?? "",
        availableFrom: existing.availableFrom ?? "",
        availableUntil: existing.availableUntil ?? "",
      });
    }
  }, [aid, cid]);

  const save = () => {
    if (aid) {
      dispatch(updateAssignment(form));
    } else {
      dispatch(addAssignment({ ...form, _id: uuidv4() }));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  const cancel = () => router.push(`/Courses/${cid}/Assignments`);

  return (
    <div className="wd-main-content-offset p-4" id="wd-assignment-editor">
      <h2 className="mb-3">{aid ? "Edit Assignment" : "New Assignment"}</h2>

      <Form className="mb-3">
        <Form.Label className="fw-semibold">Name</Form.Label>
        <FormControl
          className="mb-3"
          value={form.name ?? ""}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          id="wd-assignment-name"
        />

        <Form.Label className="fw-semibold">Description</Form.Label>
        <FormControl
          as="textarea"
          rows={4}
          className="mb-3"
          value={form.description ?? ""}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          id="wd-assignment-description"
        />

        <div className="row g-3">
          <div className="col-md-4">
            <Form.Label className="fw-semibold">Points</Form.Label>
            <FormControl
              type="number"
              value={form.points ?? 0}
              onChange={(e) =>
                setForm({ ...form, points: Number(e.target.value) })
              }
              id="wd-assignment-points"
            />
          </div>

          <div className="col-md-4">
            <Form.Label className="fw-semibold">Due date</Form.Label>
            <FormControl
              type="date"
              value={form.dueDate ?? ""}
              onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
              id="wd-assignment-due"
            />
          </div>

          <div className="col-md-4">
            <Form.Label className="fw-semibold">Available from</Form.Label>
            <FormControl
              type="date"
              value={form.availableFrom ?? ""}
              onChange={(e) =>
                setForm({ ...form, availableFrom: e.target.value })
              }
              id="wd-assignment-from"
            />
          </div>

          <div className="col-md-4">
            <Form.Label className="fw-semibold mt-3">Available until</Form.Label>
            <FormControl
              type="date"
              value={form.availableUntil ?? ""}
              onChange={(e) =>
                setForm({ ...form, availableUntil: e.target.value })
              }
              id="wd-assignment-until"
            />
          </div>
        </div>
      </Form>

      <div className="d-flex gap-2">
        <Button variant="secondary" onClick={cancel} id="wd-assignment-cancel">
          Cancel
        </Button>
        <Button variant="primary" onClick={save} id="wd-assignment-save">
          Save
        </Button>
      </div>
    </div>
  );
}
