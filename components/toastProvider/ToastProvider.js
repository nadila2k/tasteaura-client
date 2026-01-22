"use client";
import { Toaster } from "react-hot-toast";
import styles from "./ToastProvider.module.css";

export default function ToastProvider() {
  return (
    <div className={styles.toastContainer}>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          className: styles.toast, 
          success: { className: styles["toast-success"] },
          error: { className: styles["toast-error"] },
          info: { className: styles["toast-info"] },
          warning: { className: styles["toast-warning"] },
        }}
      />
    </div>
  );
}
