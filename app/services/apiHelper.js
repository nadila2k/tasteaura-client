import apiPublic from "../lib/apiPublic";
import apiPrivate from "../lib/apiPrivate";

export const publicApi = {
  get: (url, params = {}) => apiPublic.get(url, { params }),
  post: (url, data = {}) => apiPublic.post(url, data),
};

export const privateApi = {
  get: (url, params = {}) => apiPrivate.get(url, { params }),
  post: (url, data = {}) => apiPrivate.post(url, data),
  put: (url, data = {}) => apiPrivate.put(url, data),
  delete: (url) => apiPrivate.delete(url),
};
