"use client";

import { Nav, NavItem, NavLink } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();

  return (
    <Nav variant="pills">
      <NavItem>
        <NavLink
          href="/Labs"
          as={Link}
          id="wd-labs-link"
          className={`nav-link ${pathname.endsWith("Labs") ? "active" : ""}`}
        >
          Home
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          href="/Labs/Lab1"
          as={Link}
          id="wd-lab1-link"
          className={`nav-link ${pathname.endsWith("Lab1") ? "active" : ""}`}
        >
          Lab 1
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          href="/Labs/Lab2"
          as={Link}
          id="wd-lab2-link"
          className={`nav-link ${pathname.endsWith("Lab2") ? "active" : ""}`}
        >
          Lab 2
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          href="/Labs/Lab3"
          as={Link}
          id="wd-lab3-link"
          className={`nav-link ${pathname.endsWith("Lab3") ? "active" : ""}`}
        >
          Lab 3
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink
          href="/Account/Signin"
          as={Link}
          id="wd-kambaz-link"
          className={`nav-link ${pathname.includes("Account") ? "active" : ""}`}
        >
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