import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const apiPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 👉 Attach token ONLY here
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

// 👉 Handle unauthorized globally
apiPrivate.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("Token expired or unauthorized");

      // optional: auto logout
      await signOut({ redirect: true, callbackUrl: "/auth/signin" });
    }

    return Promise.reject(error);
  }
);

export default apiPrivate;
