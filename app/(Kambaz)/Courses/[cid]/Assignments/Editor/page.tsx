/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Button, FormControl, Form } from "react-bootstrap";
import { setAssignments } from "../reducer";
import * as client from "../../../client";

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
    title: "",
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
        title: existing.title ?? "",
        description: existing.description ?? "",
        points: existing.points ?? 100,
        dueDate: existing.dueDate ?? "",
        availableFrom: existing.availableFrom ?? "",
        availableUntil: existing.availableUntil ?? "",
      });
    }
  }, [aid, cid, existing]);

  const save = async () => {
    try {
      if (aid) {
        await client.updateAssignment(cid as string, form);
        dispatch(
          setAssignments(
            assignments.map((a: any) =>
              a._id === form._id ? form : a
            )
          )
        );
      } else {
        const newAssignment = await client.createAssignment(
          cid as string,
          form
        );
        dispatch(setAssignments([newAssignment, ...assignments]));
      }
      router.push(`/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error(error);
      alert("Failed to save assignment");
    }
  };

  const cancel = () => router.push(`/Courses/${cid}/Assignments`);

  return (
    <div className="wd-main-content-offset p-4" id="wd-assignment-editor">
      <h2 className="mb-3">{aid ? "Edit Assignment" : "New Assignment"}</h2>

      <Form className="mb-3">
        <Form.Label className="fw-semibold">Title</Form.Label>
        <FormControl
          className="mb-3"
          value={form.title ?? ""}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          id="wd-assignment-title"
        />

        <Form.Label className="fw-semibold">Description</Form.Label>
        <FormControl
          as="textarea"
          rows={4}
          className="mb-3"
          value={form.description ?? ""}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          id="wd-assignment-description"
        />

        <div className="row g-3">
          <div className="col-md-4">
            <Form.Label className="fw-semibold">Points</Form.Label>
            <FormControl
              type="number"
              value={form.points ?? 0}
              onChange={(e) =>
                setForm({
                  ...form,
                  points: Number(e.target.value),
                })
              }
              id="wd-assignment-points"
            />
          </div>

          <div className="col-md-4">
            <Form.Label className="fw-semibold">Due date</Form.Label>
            <FormControl
              type="date"
              value={form.dueDate ?? ""}
              onChange={(e) =>
                setForm({ ...form, dueDate: e.target.value })
              }
              id="wd-assignment-due"
            />
          </div>

          <div className="col-md-4">
            <Form.Label className="fw-semibold">Available from</Form.Label>
            <FormControl
              type="date"
              value={form.availableFrom ?? ""}
              onChange={(e) =>
                setForm({
                  ...form,
                  availableFrom: e.target.value,
                })
              }
              id="wd-assignment-from"
            />
          </div>

          <div className="col-md-4">
            <Form.Label className="fw-semibold mt-3">
              Available until
            </Form.Label>
            <FormControl
              type="date"
              value={form.availableUntil ?? ""}
              onChange={(e) =>
                setForm({
                  ...form,
                  availableUntil: e.target.value,
                })
              }
              id="wd-assignment-until"
            />
          </div>
        </div>
      </Form>

      <div className="d-flex gap-2">
        <Button
          variant="secondary"
          onClick={cancel}
          id="wd-assignment-cancel"
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={save}
          id="wd-assignment-save"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
