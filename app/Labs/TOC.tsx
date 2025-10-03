"use client";

import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";

export default function TOC() {
  return (
    <Nav variant="pills">
      <NavItem>
        <NavLink href="/Labs" as={Link} id="wd-labs-link">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Labs/Lab1" as={Link} id="wd-lab1-link">
          Lab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Labs/Lab2" as={Link} id="wd-lab2-link">
          Lab 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Labs/Lab3" as={Link} id="wd-lab3-link">
          Lab 3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Account/Signin" as={Link} id="wd-kambaz-link">
          Kambaz
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/suripeddis" id="wd-github-link">
          My GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}
