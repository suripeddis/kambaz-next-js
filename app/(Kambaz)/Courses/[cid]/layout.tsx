import courses from "../../Database/courses.json";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import type { ReactNode } from "react";

type Course = { _id: string; name: string };

export default function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { cid: string };
}) {
  const { cid } = params;
  const course = (courses as Course[]).find((c) => c._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? course.name : "Course Not Found"}
      </h2>

      <div className="text-secondary mb-3">
        <Breadcrumb course={course} />
      </div>

      <hr />

      <div className="d-flex">
        <CourseNavigation cid={cid} />
        <div className="flex-grow-1 ms-5">{children}</div>
      </div>
    </div>
  );
}