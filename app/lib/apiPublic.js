import axios from "axios";

const apiPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + "/api/v1",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiPublic;
