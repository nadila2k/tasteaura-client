"use client";

import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <h2>Dashboard</h2>

      {session && (
        <div>
          <p>Welcome, {session.user.username || session.user.email}!</p>
          <button onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
