export function handleApiError(error) {
  // Axios error with response
  if (error.response) {
    const { status, data } = error.response;

    return {
      status,
      message: data?.message || "Something went wrong",
      responseStatus: data?.responseStatus || "ERROR",
      data: null,
    };
  }

  // Network / timeout error
  if (error.request) {
    return {
      status: 0,
      message: "Network error. Please check your connection.",
      responseStatus: "FAILED",
      data: null,
    };
  }

  // Unknown error
  return {
    status: 0,
    message: error.message || "Unexpected error",
    responseStatus: "FAILED",
    data: null,
  };
}
