"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const pathname = usePathname();

  const links = currentUser
    ? [{ label: "Profile", href: "/Account/Profile" }]
    : [
        { label: "Signin", href: "/Account/Signin" },
        { label: "Signup", href: "/Account/Signup" },
      ];

  return (
    <Nav variant="pills" className="flex-column">
      {links.map(({ label, href }) => (
        <NavItem key={href}>
          <NavLink
            as={Link}
            href={href}
            active={pathname === href}
          >
            {label}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
}
