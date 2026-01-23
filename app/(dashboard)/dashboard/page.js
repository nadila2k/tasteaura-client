"use client";

import React from "react";
import { signOut } from "next-auth/react";

export default function Dashboard() {
  const handleLogout = () => {
    signOut({
      callbackUrl: "/auth/signin",
    });
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
