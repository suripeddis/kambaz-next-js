"use client";

import Link from "next/link";
import Image from "next/image";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function CourseNavigation() {
  return (
    <ListGroup
      id="wd-courses-navigation"
      className="wd fs-5 rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 200 }}
    >
      <ListGroupItem className="bg-black border-0 text-center">
        <Link
          href="https://www.northeastern.edu/"
          target="_blank"
          id="wd-neu-link"
          className="d-inline-block"
        >
          <Image
            src="/northeasternlogo.png"
            width={120}
            height={40}
            alt="Northeastern University"
          />
        </Link>
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Courses/1234/Home"
        id="wd-course-home-link"
        className="list-group-item active border-0"
      >
        Home
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Courses/1234/Modules"
        id="wd-course-modules-link"
        className="list-group-item text-danger border-0"
      >
        Modules
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className="list-group-item text-danger border-0"
      >
        Piazza
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className="list-group-item text-danger border-0"
      >
        Zoom
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Courses/1234/Assignments"
        id="wd-course-assignments-link"
        className="list-group-item text-danger border-0"
      >
        Assignments
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Courses/1234/Quizzes"
        id="wd-course-quizzes-link"
        className="list-group-item text-danger border-0"
      >
        Quizzes
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Courses/1234/People/Table"
        id="wd-course-people-link"
        className="list-group-item text-danger border-0"
      >
        People
      </ListGroupItem>
    </ListGroup>
  );
}
