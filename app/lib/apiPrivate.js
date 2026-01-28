import axios from "axios";
import { getSession } from "next-auth/react";
import { handleApiError } from "./handleApiError";

const apiPrivate = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
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
  (response) => {
    const apiResponse = response.data;

    if (apiResponse.responseStatus !== "SUCCESS") {
      return Promise.reject(apiResponse);
    }

    return apiResponse;
  },
  (error) => {
    // Optional: auto logout on token expiry
    if (error.response?.status === 401) {
      // window.location.href = "/auth/signin";
      console.warn("Unauthorized – token may be expired");
    }

    return Promise.reject(handleApiError(error));
  }
);

export default apiPrivate;
