"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import apiPublic from "@/app/lib/apiPublic";
import styles from "./SignUpPage.module.css";
import logo from "@/public/image/logo/tasteaura-logo.png";
import Image from "next/image";
import { useToast } from "@/hooks/useToast";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const { error, success } = useToast();
  const [loading, setLoading] = useState(false);
const { data: session, status } = useSession();
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
    setMounted(true);
  }, []);

  // Redirect if logged in
  useEffect(() => {
    if (mounted && status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [mounted, status, router]);


  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      phone: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await apiPublic.post("/auth/signup", values);

        const res = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });

        if (res?.ok) {
          success("Signup successful!");
          router.replace("/dashboard");
        } else {
          error("Signup succeeded but login failed. Please login manually.");
          router.push("/auth/signin");
        }
      } catch (err) {
        error(err?.response?.data?.message || "Signup failed");
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
        <p className={styles.subtitle}>Create your account to get started!</p>

        <form onSubmit={formik.handleSubmit} className={styles.form}>
          {/* Username */}
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username && (
              <p className={styles.error}>{formik.errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
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
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className={styles.error}>{formik.errors.password}</p>
            )}
          </div>

          {/* Phone */}
          <div className={styles.inputGroup}>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter your phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className={styles.error}>{formik.errors.phone}</p>
            )}
          </div>

          {/* Address */}
          <div className={styles.inputGroup}>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Enter your address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address && (
              <p className={styles.error}>{formik.errors.address}</p>
            )}
          </div>

          {/* Submit button */}
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        <p className={styles.signupText}>
          Already have an account?{" "}
          <Link href="/auth/signin" className={styles.signupLink}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
