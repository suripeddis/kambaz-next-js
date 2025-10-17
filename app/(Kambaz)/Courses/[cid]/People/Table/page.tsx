"use client";

import { useParams } from "next/navigation";
import users from "../../../../Database/users.json";
import enrollments from "../../../../Database/enrollments.json";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const { cid } = useParams() as { cid: string };

  const courseUsers = users.filter((usr: any) =>
    enrollments.some(
      (enr: any) => enr.user === usr._id && enr.course === cid
    )
  );

  return (
    <div id="wd-people-table" className="table-responsive">
      <table className="table table-striped align-middle">
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
          {courseUsers.map((user: any) => (
            <tr key={user._id}>
              <td className="text-nowrap">
                <FaUserCircle className="me-2 fs-3 text-secondary" />
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