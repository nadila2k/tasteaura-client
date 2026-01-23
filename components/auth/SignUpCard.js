"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import apiPublic from "@/app/lib/apiPublic";
import styles from "./SignUpPage.module.css";
import logo from "@/public/image/logo/tasteaura-logo.png";
import Image from "next/image";
import { useToast } from "@/hooks/useToast";
import Link from "next/link";

export default function SignUpCard() {
  const router = useRouter();
  const { error, success } = useToast();
  const [loading, setLoading] = useState(false);

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
        // Signup API call
        await apiPublic.post("/auth/signup", values);

        // Auto-login after signup
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
          {["username", "email", "password", "phone", "address"].map((field) => (
            <div key={field} className={styles.inputGroup}>
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                id={field}
                name={field}
                type={field === "password" ? "password" : "text"}
                placeholder={`Enter your ${field}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field]}
              />
              {formik.touched[field] && formik.errors[field] && (
                <p className={styles.error}>{formik.errors[field]}</p>
              )}
            </div>
          ))}

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
