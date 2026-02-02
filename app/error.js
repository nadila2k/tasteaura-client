"use client";
import "./error.css";

export default function GlobalError({ error, reset }) {
  return (
    <div className="error-container">
      <h1>Oops! Something went wrong</h1>
      <p>{error?.message || "An unexpected error occurred."}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
