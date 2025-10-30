"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, FormControl } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import { RootState } from "@/app/(Kambaz)/store";

interface UserProfile {
  _id?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  email?: string;
  role?: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  useEffect(() => {
    if (!currentUser) {
      redirect("/Account/Signin");
    } else {
      setProfile(currentUser);
    }
  }, [currentUser]);

  const signout = () => {
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };

  return (
    <div className="wd-main-content-offset p-4">
      <div className="mx-auto" style={{ maxWidth: 560 }}>
        <h3 className="mb-3">Profile</h3>

        <FormControl
          id="wd-username"
          className="mb-2"
          defaultValue={profile?.username}
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        />
        <FormControl
          id="wd-password"
          className="mb-2"
          type="password"
          defaultValue={profile?.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        />
        <FormControl
          id="wd-firstname"
          className="mb-2"
          defaultValue={profile?.firstName}
          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        />
        <FormControl
          id="wd-lastname"
          className="mb-2"
          defaultValue={profile?.lastName}
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        />
        <FormControl
          id="wd-dob"
          className="mb-2"
          type="date"
          defaultValue={profile?.dob}
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        />
        <FormControl
          id="wd-email"
          className="mb-2"
          type="email"
          defaultValue={profile?.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <select
          id="wd-role"
          className="form-select mb-3"
          defaultValue={profile?.role ?? "USER"}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>

        <Button onClick={signout} className="w-100" id="wd-signout-btn">
          Sign out
        </Button>
      </div>
    </div>
  );
}
