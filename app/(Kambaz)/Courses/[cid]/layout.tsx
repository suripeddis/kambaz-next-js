/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ReactNode, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function CourseLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams<{ cid: string }>();
  const router = useRouter();
  const { currentUser } = useSelector((s: any) => s.accountReducer);
  const { enrollments } = useSelector((s: any) => s.enrollmentsReducer);

  useEffect(() => {
    if (!currentUser) return; // let unauthenticated users hit Dashboard/Signin flows elsewhere
    const isEnrolled = enrollments.some(
      (e: any) => e.user === currentUser._id && e.course === cid
    );
    const isFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN" || currentUser.role === "TA";
    if (!isEnrolled && !isFaculty) {
      router.replace("/Dashboard");
    }
  }, [cid, currentUser, enrollments, router]);

  return <>{children}</>;
}
