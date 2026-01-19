import api from "./api";
import { getSession } from "next-auth/react";

api.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized or token expired");
    }
    return Promise.reject(error);
  }
);

export default api;
