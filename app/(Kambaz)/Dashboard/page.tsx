/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourses } from "../Courses/reducer";
import { toggleShowAll, enroll, unenroll } from "../Enrollments/reducer";
import * as courseClient from "../Courses/client";
import * as enrollmentClient from "../Enrollments/client";
import { FormControl, Button } from "react-bootstrap";
import Link from "next/link";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { courses } = useSelector((s: any) => s.coursesReducer);
  const { currentUser } = useSelector((s: any) => s.accountReducer);
  const { enrollments, showAllCourses } = useSelector(
    (s: any) => s.enrollmentsReducer
  );

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const fetchCourses = async () => {
    const courses = await courseClient.findMyCourses();
    dispatch(setCourses(courses));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const onAddNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((c: any) => c._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await courseClient.updateCourse(course);
    dispatch(
      setCourses(courses.map((c: any) => (c._id === course._id ? course : c)))
    );
  };

  const handleEnroll = async (courseId: string) => {
    await enrollmentClient.enrollInCourse(currentUser._id, courseId);
    dispatch(enroll({ user: currentUser._id, course: courseId }));
  };

  const handleUnenroll = async (courseId: string) => {
    await enrollmentClient.unenrollFromCourse(currentUser._id, courseId);
    dispatch(unenroll({ user: currentUser._id, course: courseId }));
  };

  const isEnrolled = (cid: string) =>
    currentUser &&
    enrollments.some(
      (e: any) => e.user === currentUser._id && e.course === cid
    );

  const visibleCourses = currentUser
    ? showAllCourses
      ? courses
      : courses.filter((c: any) => isEnrolled(c._id))
    : courses;

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Dashboard</h1>
        <Button onClick={() => dispatch(toggleShowAll())}>
          Enrollments {showAllCourses ? "ON" : "OFF"}
        </Button>
      </div>

      <hr />

      <h5>
        New Course
        <button className="btn btn-primary float-end" onClick={onAddNewCourse}>
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>

      <FormControl
        className="mb-2"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />

      <FormControl
        as="textarea"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
      />

      <hr />

      <h4>Published Courses ({visibleCourses.length})</h4>

      <div className="row row-cols-1 row-cols-md-5 g-4">
        {visibleCourses.map((c: any) => (
          <div key={c._id} className="col">
            <div className="card">
              <Link href={`/Courses/${c._id}`}>
                <img src={c.image} className="card-img-top" />
              </Link>

              <div className="card-body">
                <h5>{c.name}</h5>
                <p>{c.description}</p>

                {currentUser &&
                  (isEnrolled(c._id) ? (
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleUnenroll(c._id)}
                    >
                      Unenroll
                    </button>
                  ) : (
                    <button
                      className="btn btn-success me-2"
                      onClick={() => handleEnroll(c._id)}
                    >
                      Enroll
                    </button>
                  ))}

                <button
                  className="btn btn-warning me-2"
                  onClick={() => setCourse(c)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteCourse(c._id)}
                >
                  Delete
                </button>

                <Link href={`/Courses/${c._id}`}>
                  <button className="btn btn-primary float-end">Go</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentUser && !showAllCourses && visibleCourses.length === 0 && (
        <p className="text-muted mt-3">
          You aren&apos;t enrolled in any courses yet.
        </p>
      )}
    </div>
  );
}
