// app/auth/signin/page.js
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/lib/auth";
import SignInCard from "@/components/auth/SignInCard";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard"); 
  }

  return <SignInCard />; 
}
