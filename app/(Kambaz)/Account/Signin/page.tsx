/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import * as db from "../../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<{ username?: string; password?: string }>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username && u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    router.push("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="p-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1 className="mb-3">Sign in</h1>

      <FormControl
        value={credentials.username || ""}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="mb-2"
        placeholder="username"
        id="wd-username"
      />

      <FormControl
        value={credentials.password || ""}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="mb-3"
        placeholder="password"
        type="password"
        id="wd-password"
      />

      <Button
        onClick={signin}
        id="wd-signin-btn"
        className="w-100 mb-3"
        variant="primary"
      >
        Sign in
      </Button>

      <div className="text-center">
        <Link id="wd-signup-link" href="/Account/Signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}