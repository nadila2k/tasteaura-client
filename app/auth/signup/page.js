import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/lib/auth";
import SignUpCard from "@/components/auth/SignUpCard";

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return <SignUpCard />; 
}
