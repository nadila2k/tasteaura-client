"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn, useSession } from "next-auth/react";
import styles from "./SignInPage.module.css";
import logo from "@/public/image/logo/tasteaura-logo.png";
import Image from "next/image";
import { useToast } from "@/hooks/useToast";
import Link from "next/link";
import { useRouter } from "next/navigation";




export default function SignInPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { error } = useToast();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });

        if (res?.error) {
          error("Login failed");
        } else {
          window.location.href = "/dashboard";
        }
      } catch (err) {
        error("Something went wrong");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <Image src={logo} alt="TasteAura Logo" className={styles.logo} />
        <h1 className={styles.companyName}>TasteAura</h1>
        <p className={styles.subtitle}>
          Welcome back! Please sign in to your account.
        </p>

        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className={styles.error}>{formik.errors.email}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password && (
              <p className={styles.error}>{formik.errors.password}</p>
            )}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className={styles.signupText}>
          Don&rsquo;t have an account?{" "}
          <Link href="/auth/signup" className={styles.signupLink}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
