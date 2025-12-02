"use client";
import { useEffect, useState } from "react";
import {
  fetchAllCourses,
  findMyCourses,
  enrollInCourse,
  unenrollFromCourse,
} from "./client";

interface Course {
  _id: string;
  name: string;
  number: string;
}

export default function CoursesPage() {
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [myCourseIds, setMyCourseIds] = useState<string[]>([]);
  const [showMyCourses, setShowMyCourses] = useState(false);

  const loadEverything = async () => {
    const all = await fetchAllCourses();
    setAllCourses(all);

    const mine = await findMyCourses(); // returns array of courses
    const ids = mine.map((c: Course) => c._id);
    setMyCourseIds(ids);
  };

  useEffect(() => {
    loadEverything();
  }, []);

  const isEnrolled = (courseId: string) => myCourseIds.includes(courseId);

  const toggleEnroll = async (courseId: string) => {
    if (isEnrolled(courseId)) {
      await unenrollFromCourse(courseId);
      setMyCourseIds((prev) => prev.filter((id) => id !== courseId));
    } else {
      await enrollInCourse(courseId);
      setMyCourseIds((prev) => [...prev, courseId]);
    }
  };

  const visibleCourses = showMyCourses
    ? allCourses.filter((c) => myCourseIds.includes(c._id))
    : allCourses;

  return (
    <div className="p-4 text-white">
      <h1 className="mb-4">Courses</h1>

      <div className="d-flex gap-2 mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setShowMyCourses(false)}
        >
          All Courses
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setShowMyCourses(true)}
        >
          My Courses
        </button>
      </div>

      <ul className="list-group">
        {visibleCourses.map((course) => (
          <li
            key={course._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <b>{course.name}</b>
              <br />
              {course.number}
            </div>

            <button
              className={
                isEnrolled(course._id) ? "btn btn-danger" : "btn btn-success"
              }
              onClick={() => toggleEnroll(course._id)}
            >
              {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
