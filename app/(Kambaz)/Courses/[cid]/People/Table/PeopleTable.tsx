"use client";
import { useState } from "react";
import PeopleDetails from "../../../../Account/Users/Details";

export default function PeopleTable({ users, fetchUsers }: any) {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const openDetails = (id: string) => {
    setSelectedUserId(id);
  };

  const closeDetails = () => {
    setSelectedUserId(null);
    fetchUsers(); 
  };

  return (
    <div className="position-relative">
      {selectedUserId && (
        <PeopleDetails uid={selectedUserId} onClose={closeDetails} />
      )}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>User</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u: any) => (
            <tr key={u._id} onClick={() => openDetails(u._id)} style={{ cursor: "pointer" }}>
              <td>{u.firstName} {u.lastName}</td>
              <td>{u.username}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
