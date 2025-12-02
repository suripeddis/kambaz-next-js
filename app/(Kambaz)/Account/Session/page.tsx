"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const SERVER =
  process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

interface User {
  _id: string;
  username: string;
  role: string;
}

export default function SessionPage() {
  const [profile, setProfile] = useState<User | null>(null);

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get<User>(`${SERVER}/api/users/current`, {
        withCredentials: true,
      });
      setProfile(data);
    } catch (e) {
      setProfile(null);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="mb-4">Session</h1>

      {profile === null && <p>No user logged in.</p>}

      {profile !== null && (
        <div>
          <p><b>ID:</b> {profile._id}</p>
          <p><b>Username:</b> {profile.username}</p>
          <p><b>Role:</b> {profile.role}</p>
        </div>
      )}
    </div>
  );
}
