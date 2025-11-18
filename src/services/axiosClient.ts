import axios, { AxiosError } from "axios";

const BASE_URL = "https://api.example.com";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  validateStatus: (status) => status < 500,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    if (error instanceof AxiosError) {
      return error.response;
    } else return error;
  }
);

export default axiosClient;
