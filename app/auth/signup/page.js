"use client";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import apiPublic from "@/app/lib/apiPublic";

export default function SignUpPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const payload = {
      username: e.target.username.value,
      email,
      password,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };

    try {
      // 1️⃣ Signup
      await apiPublic.post("/auth/signup", payload);

      // 2️⃣ Auto login
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      // 3️⃣ Redirect
      if (res?.ok) {
        router.replace("/dashboard");
      } else {
        router.push("/auth/signin");
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Signup failed");
    }
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" required />
        <br />
        <input name="email" placeholder="Email" required />
        <br />
        <input name="password" type="password" placeholder="Password" required />
        <br />
        <input name="phone" placeholder="Phone" required />
        <br />
        <input name="address" placeholder="Address" required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
