import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});

export const privateRequest = axios.create({
  baseURL: "http://localhost:3000/api",
});

privateRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
