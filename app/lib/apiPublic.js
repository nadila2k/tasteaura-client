// lib/apiPublic.js
import axios from "axios";
import { normalizeAxiosError } from "./apiError";

const apiPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiPublic.interceptors.response.use(
  (response) => response.data, // unwrap ApiResponse
  (error) => Promise.reject(normalizeAxiosError(error))
);

export default apiPublic;
