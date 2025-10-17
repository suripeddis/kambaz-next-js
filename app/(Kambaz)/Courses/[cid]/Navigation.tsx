"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";

type Props = { cid: string };

export default function CourseNavigation({ cid }: Props) {
  const pathname = usePathname();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
<ListGroup
  id="wd-courses-navigation"
  className="wd fs-5 rounded-0 bg-black"
  style={{ width: 200, minHeight: "100vh" }}
>
      {links.map((link) => {
        const href = `/Courses/${cid}/${link}`;
        const active = pathname.endsWith(`/${link}`);
        return (
          <ListGroupItem
            key={link}
            as={Link}
            href={href}
            className={`border-0 text-center ${
              active ? "bg-white text-danger" : "bg-black text-white"
            }`}
            id={`wd-course-${link.toLowerCase()}-link`}
          >
            {link}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}