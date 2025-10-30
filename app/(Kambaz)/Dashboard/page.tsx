"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { toggleShowAll, enroll, unenroll } from "../Enrollments/reducer";
import * as db from "../Database";
import { FormControl, Button } from "react-bootstrap";
import Link from "next/link";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { courses } = useSelector((s: any) => s.coursesReducer);
  const { currentUser } = useSelector((s: any) => s.accountReducer);
  const { enrollments, showAllCourses } = useSelector((s: any) => s.enrollmentsReducer);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const isEnrolled = (cid: string) =>
    !!currentUser &&
    enrollments.some((e: any) => e.user === currentUser._id && e.course === cid);

  const visibleCourses = currentUser
    ? (showAllCourses ? courses : courses.filter((c: any) => isEnrolled(c._id)))
    : courses; // when logged out, show all

  return (
    <div id="wd-dashboard" className="wd-main-content-offset p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title" className="mb-0">Dashboard</h1>

        <Button
          variant="primary"
          onClick={() => dispatch(toggleShowAll())}
          id="wd-enrollments-toggle"
        >
          Enrollments {showAllCourses ? "ON" : "OFF"}
        </Button>
      </div>

      <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse({ ...course, _id: uuidv4() }))}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={() => dispatch(updateCourse(course))}
        >
          Update
        </button>
      </h5>
      <br />

      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />

      <h4 className="mb-3">Published Courses ({visibleCourses.length})</h4>

      <div className="row row-cols-1 row-cols-md-5 g-4">
        {visibleCourses.map((c: any) => (
          <div key={c._id} className="col" id="wd-dashboard-course">
            <div className="card rounded-3 overflow-hidden">
              <Link href={`/Courses/${c._id}`}>
                <img src={c.image} className="card-img-top" alt={c.name} />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{c.name}</h5>
                <p className="card-text">{c.description}</p>

                {currentUser && (
                  isEnrolled(c._id) ? (
                    <button
                      className="btn btn-danger me-2"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(unenroll({ user: currentUser._id, course: c._id }));
                      }}
                      id={`wd-unenroll-${c._id}`}
                    >
                      Unenroll
                    </button>
                  ) : (
                    <button
                      className="btn btn-success me-2"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(enroll({ user: currentUser._id, course: c._id }));
                      }}
                      id={`wd-enroll-${c._id}`}
                    >
                      Enroll
                    </button>
                  )
                )}

                <button
                  className="btn btn-warning me-2"
                  onClick={(e) => { e.preventDefault(); setCourse(c); }}
                  id="wd-edit-course-click"
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={(e) => { e.preventDefault(); dispatch(deleteCourse(c._id)); }}
                  id="wd-delete-course-click"
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
        <p className="text-muted mt-3">You aren’t enrolled in any courses yet.</p>
      )}
    </div>
  );
}
