/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { deleteAssignment } from "./reducer";

export default function AssignmentsPage() {
  const { cid } = useParams<{ cid: string }>();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((s: any) => s.assignmentsReducer);

  const courseAssignments = (assignments || []).filter(
    (a: any) => a.course === cid
  );

  return (
    <div id="wd-assignments" className="wd-main-content-offset p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="m-0">Assignments</h2>
        <Button
          variant="danger"
          onClick={() => router.push(`/Courses/${cid}/Assignments/Editor`)}
          id="wd-add-assignment"
        >
          + Assignment
        </Button>
      </div>

      <div className="list-group">
        {courseAssignments.map((a: any) => (
          <div key={a._id} className="list-group-item d-flex justify-content-between">
            <div
              role="button"
              onClick={() =>
                router.push(`/Courses/${cid}/Assignments/Editor?aid=${a._id}`)
              }
            >
              <div className="fw-semibold">{a.name}</div>
              <div className="text-muted small">
                {a.points} pts • Due {a.dueDate || "—"}
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <Link
                href={`/Courses/${cid}/Assignments/Editor?aid=${a._id}`}
                className="btn btn-warning btn-sm"
              >
                Edit
              </Link>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  if (window.confirm("Delete this assignment?")) {
                    dispatch(deleteAssignment(a._id));
                  }
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}

        {courseAssignments.length === 0 && (
          <div className="text-muted">No assignments yet.</div>
        )}
      </div>
    </div>
  );
}
