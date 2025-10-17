"use client";

import { useParams } from "next/navigation";
import users from "../../../../Database/users.json";
import enrollments from "../../../../Database/enrollments.json";
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

type Enrollment = {
  _id: string;
  user: string;   // user id
  course: string; // course id (cid)
};

export default function PeopleTable() {
  const { cid } = useParams();

  const enrolledUsers = (users as User[]).filter((u) =>
    (enrollments as Enrollment[]).some(
      (e) => e.user === u._id && e.course === cid
    )
  );

  return (
    <div id="wd-people-table" className="table-responsive">
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
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}