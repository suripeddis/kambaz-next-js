"use client";
import { useEffect, useState } from "react";
import { fetchAllCourses } from "./client";

interface Course {
  _id: string;
  name: string;
  number: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  const loadCourses = async () => {
    const data = await fetchAllCourses();
    setCourses(data);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="mb-4">Courses</h1>

      <ul className="list-group">
        {courses.map((course) => (
          <li key={course._id} className="list-group-item">
            <b>{course.name}</b>
            <br />
            {course.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
