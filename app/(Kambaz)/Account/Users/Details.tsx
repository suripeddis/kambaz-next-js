"use client";
import { useEffect, useState } from "react";
import * as client from "../client";

export default function PeopleDetails({
  uid,
  onClose,
}: {
  uid: string;
  onClose: () => void;
}) {
  const [user, setUser] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<any>({});

  const loadUser = async () => {
    const data = await client.findUserById(uid);
    setUser(data);
    setForm(data);
  };

  useEffect(() => {
    loadUser();
  }, [uid]);

  if (!user) return null;

  const saveUser = async () => {
    await client.updateUser(form);
    setEditing(false);
    loadUser();
  };

  const deleteUser = async () => {
    await client.deleteUser(uid);
    onClose();
  };

  return (
    <div
      className="position-fixed top-0 end-0 bg-white p-4 shadow"
      style={{ width: "320px", height: "100vh", overflowY: "auto" }}
    >
      <button onClick={onClose} className="btn btn-secondary float-end">
        ✕
      </button>

      <h4 className="mt-4">
        {editing ? (
          <>
            <input
              className="form-control mb-2"
              value={form.firstName}
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
            />
            <input
              className="form-control"
              value={form.lastName}
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
            />
          </>
        ) : (
          `${user.firstName} ${user.lastName}`
        )}
      </h4>

      <hr />

      {/* Username */}
      {editing ? (
        <input
          className="form-control mb-2"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />
      ) : (
        <p>
          <b>Username:</b> {user.username}
        </p>
      )}

      {/* Email */}
      {editing ? (
        <input
          className="form-control mb-2"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
      ) : (
        <p>
          <b>Email:</b> {user.email}
        </p>
      )}

      {/* Role */}
      {editing ? (
        <select
          className="form-select mb-2"
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        >
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Admin</option>
        </select>
      ) : (
        <p>
          <b>Role:</b> {user.role}
        </p>
      )}

      {/* Section */}
      {editing ? (
        <input
          className="form-control mb-2"
          value={form.section}
          onChange={(e) =>
            setForm({ ...form, section: e.target.value })
          }
        />
      ) : (
        <p>
          <b>Section:</b> {user.section}
        </p>
      )}

      <hr />

      {/* BUTTONS */}
      {!editing ? (
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>

          <button className="btn btn-danger" onClick={deleteUser}>
            Delete
          </button>
        </div>
      ) : (
        <div className="d-flex gap-2">
          <button className="btn btn-success" onClick={saveUser}>
            Save
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => {
              setEditing(false);
              setForm(user); // reset
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
