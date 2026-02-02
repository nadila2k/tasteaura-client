"use client";
import "./notfound.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Go Back Home</Link>
    </div>
  );
}
