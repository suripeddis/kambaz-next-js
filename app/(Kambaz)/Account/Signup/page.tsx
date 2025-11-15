"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";

interface UserForm {
  username?: string;
  password?: string;
}

export default function Signup() {
  const [user, setUser] = useState<UserForm>({});
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Account/Profile");
    } catch (error) {
      console.error(error);
      alert("Username already taken");
    }
  };
  
  return (
    <div id="wd-signup-screen" className="p-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1 className="mb-3">Sign up</h1>
      
      <FormControl
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username mb-2"
        placeholder="username"
      />
      
      <FormControl
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="wd-password mb-2"
        placeholder="password"
        type="password"
      />
      
      <Button onClick={signup} className="btn btn-primary w-100 mb-2">
        Sign up
      </Button>
      
      <Link href="/Account/Signin" className="wd-signin-link">Sign in</Link>
    </div>
  );
}