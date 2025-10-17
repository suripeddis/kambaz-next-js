import courses from "../../Database/courses.json";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import Link from "next/link";

export default function CoursesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { cid: string };
}) {
  const { cid } = params;
  const course = courses.find((c) => c._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger d-flex align-items-center">
        <FaAlignJustify className="me-3 fs-4 mb-1" />
        <Breadcrumb course={course} />
      </h2>
      <hr />
      <div className="d-flex">
        {/* Left Sidebar */}
        <CourseNavigation cid={cid} />

        {/* Main Content Area */}
        <div className="flex-grow-1 ms-5">{children}</div>
      </div>
    </div>
  );
}