"use client"; 
import toast from "react-hot-toast";

export const useToast = () => {
  const success = (msg) => toast.success(msg);
  const error = (msg) => toast.error(msg);
  const info = (msg) => toast(msg, { style: { background: "#333", color: "#fff" } });

  return { success, error, info };
};
