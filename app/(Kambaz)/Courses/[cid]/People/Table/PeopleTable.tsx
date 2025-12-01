"use client";
import { useState } from "react";
import PeopleDetails from "../../../../Account/Users/Details";

// Local User type for this table
interface User {
  _id?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  role?: string;
}

interface PeopleTableProps {
  users: User[];
  fetchUsers: () => void;
}

export default function PeopleTable({ users, fetchUsers }: PeopleTableProps) {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const openDetails = (id: string) => {
    setSelectedUserId(id);
  };

  const closeDetails = () => {
    setSelectedUserId(null);
    fetchUsers(); // refresh list
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
          {users.map((u: User) => (
            <tr
              key={u._id}
              onClick={() => openDetails(u._id as string)}
              style={{ cursor: "pointer" }}
            >
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
