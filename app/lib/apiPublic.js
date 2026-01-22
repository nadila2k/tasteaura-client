import axios from "axios";
import { handleApiError } from "./handleApiError";

const apiPublic = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Handle backend ApiResponse
apiPublic.interceptors.response.use(
  (response) => {
    const apiResponse = response.data;

    if (apiResponse.responseStatus !== "SUCCESS") {
      return Promise.reject(apiResponse);
    }

    return apiResponse;
  },
  (error) => Promise.reject(handleApiError(error))
);

export default apiPublic;
