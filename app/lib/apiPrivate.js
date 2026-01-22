// lib/apiPrivate.js
import axios from "axios";
import { getSession, signOut } from "next-auth/react";
import { normalizeAxiosError } from "./apiError";

const apiPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiPrivate.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

apiPrivate.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized – logging out");
      await signOut({ redirect: true, callbackUrl: "/auth/signin" });
    }

    return Promise.reject(normalizeAxiosError(error));
  }
);

export default apiPrivate;
