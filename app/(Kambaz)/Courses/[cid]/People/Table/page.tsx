"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  section?: string;
  role?: string;
  lastActivity?: string;
  totalActivity?: string;
};

export default function PeopleTable() {
  const { cid } = useParams();
  const [enrolledUsers, setEnrolledUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrolledUsers = async () => {
      try {
        const response = await fetch(
          `https://kambaz-node-server-a6-542o.onrender.com/api/courses/${cid}/users`,
          { credentials: "include" }
        );
        if (response.ok) {
          const users = await response.json();
          setEnrolledUsers(users);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (cid) {
      fetchEnrolledUsers();
    }
  }, [cid]);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div id="wd-people-table" className="table-responsive p-4">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity || "N/A"}</td>
              <td className="wd-total-activity">{user.totalActivity || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}