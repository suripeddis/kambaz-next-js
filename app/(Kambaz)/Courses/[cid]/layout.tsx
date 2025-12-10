/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactNode, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa";

export default function CourseLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams<{ cid: string }>();
  const router = useRouter();
  const { currentUser } = useSelector((s: any) => s.accountReducer);
  const { enrollments } = useSelector((s: any) => s.enrollmentsReducer);
  const { courses } = useSelector((s: any) => s.coursesReducer);
  
  const course = courses.find((c: any) => c._id === cid);

  useEffect(() => {
    if (!currentUser) return;
    const isEnrolled = enrollments.some(
      (e: any) => e.user === currentUser._id && e.course === cid
    );
    const isFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN" || currentUser.role === "TA";
    if (!isEnrolled && !isFaculty) {
      router.replace("/Dashboard");
    }
  }, [cid, currentUser, enrollments, router]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation cid={cid} />
        </div>
        <div className="flex-fill ps-3">
          {children}
        </div>
      </div>
    </div>
  );
}