export class ApiError extends Error {
  constructor({ status = 0, message = "Something went wrong", data = null }) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export function normalizeAxiosError(error) {
  if (error.response) {
    const { status, data } = error.response;

    return new ApiError({
      status,
      message:
        data?.message ||
        data?.error ||
        "Request failed. Please try again.",
      data: data?.data || null,
    });
  }

  if (error.request) {
    return new ApiError({
      status: 0,
      message: "Network error. Please check your connection.",
    });
  }

  return new ApiError({
    status: 0,
    message: error.message || "Unexpected error occurred.",
  });
}
