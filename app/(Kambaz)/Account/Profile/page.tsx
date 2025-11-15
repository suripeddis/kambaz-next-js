"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, FormControl } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import { RootState } from "@/app/(Kambaz)/store";
import * as client from "../client";

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

  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  const signout = async () => {
    try {
      await client.signout();
      dispatch(setCurrentUser(null));
      redirect("/Account/Signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wd-main-content-offset p-4">
      <div className="mx-auto" style={{ maxWidth: 560 }}>
        <h3 className="mb-3">Profile</h3>

        <FormControl
          id="wd-username"
          className="mb-2"
          value={profile?.username || ""}
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          placeholder="username"
        />
        <FormControl
          id="wd-password"
          className="mb-2"
          type="password"
          value={profile?.password || ""}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          placeholder="password"
        />
        <FormControl
          id="wd-firstname"
          className="mb-2"
          value={profile?.firstName || ""}
          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          placeholder="first name"
        />
        <FormControl
          id="wd-lastname"
          className="mb-2"
          value={profile?.lastName || ""}
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          placeholder="last name"
        />
        <FormControl
          id="wd-dob"
          className="mb-2"
          type="date"
          value={profile?.dob || ""}
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        />
        <FormControl
          id="wd-email"
          className="mb-2"
          type="email"
          value={profile?.email || ""}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="email"
        />
        <select
          id="wd-role"
          className="form-select mb-3"
          value={profile?.role ?? "USER"}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>

        <Button onClick={updateProfile} className="w-100 mb-2 btn-primary" id="wd-update-btn">
          Update
        </Button>
        
        <Button onClick={signout} className="w-100 btn-danger" id="wd-signout-btn">
          Sign out
        </Button>
      </div>
    </div>
  );
}