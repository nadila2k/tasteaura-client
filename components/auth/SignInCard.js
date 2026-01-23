"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/useToast";
import styles from "./SignInCard.module.css";
import logo from "@/public/image/logo/tasteaura-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function SignInCard() {
  const { error } = useToast();
  const [loading, setLoading] = useState(false);

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
          window.location.href = "/dashboard"; // client-side redirect after login
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
          {/* Email */}
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

          {/* Password */}
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

          {/* Submit */}
          <button type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className={styles.signupText}>
          Don’t have an account?{" "}
          <Link href="/auth/signup" className={styles.signupLink}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
