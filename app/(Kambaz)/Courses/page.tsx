"use client";

import { useEffect, useState } from "react";
import { fetchAllCourses } from "./client";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchAllCourses();
        setCourses(data || []);
      } catch (e) {
        console.error("Failed to load courses", e);
      }
    }
    load();
  }, []);

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>All Courses</h1>

      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul>
          {courses.map((course: any) => (
            <li key={course._id}>
              {course.name} ({course.number})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
