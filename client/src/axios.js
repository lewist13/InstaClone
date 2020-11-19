import axios from "axios";

const ApiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `${window.location.orgin}/api`
      : "http://localhost:3001",
});

ApiClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default ApiClient;
