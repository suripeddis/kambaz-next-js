// app/(Kambaz)/Courses/[cid]/layout.tsx
import courses from "../../Database/courses.json";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import type { ReactNode } from "react";

export default async function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;                    
  const course = (courses as { _id: string; name: string }[]).find(
    (c) => c._id === cid
  );

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