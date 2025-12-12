"use client";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import PeopleTable from "../../Courses/[cid]/People/Table/PeopleTable";
import * as client from "../client";

interface User {
  _id?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
  section?: string;
  role?: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    const data: User[] = await client.findAllUsers();
    setUsers(data);
  };

  const filterUsersByRole = async (r: string) => {
    setRole(r);
    if (r) {
      const data: User[] = await client.findUsersByRole(r);
      setUsers(data);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByName = async (n: string) => {
    setName(n);
    if (n) {
      const data: User[] = await client.findUsersByPartialName(n);
      setUsers(data);
    } else {
      fetchUsers();
    }
  };

  const createUser = async () => {
    const newUser: User = {
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "Student",
    };

    const created: User = await client.createUser(newUser);
    setUsers([...users, created]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Users</h3>

      <div className="d-flex gap-2 mb-3">
        <select
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="form-select w-25"
        >
          <option value="">All Roles</option>
          <option value="Student">Students</option>
          <option value="TA">Assistants</option>
          <option value="Faculty">Faculty</option>
          <option value="Admin">Administrators</option>
        </select>

        <input
          placeholder="Search people"
          className="form-control w-25"
          value={name}
          onChange={(e) => filterUsersByName(e.target.value)}
        />

        <button onClick={createUser} className="btn btn-danger ms-auto">
          <FaPlus className="me-2" />
          Users
        </button>
      </div>

      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}