import axios from "axios";
import store from "../redux/store";

const axiosInstance = axios.create({
  baseURL: "http://92.205.111.2:9999/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.user.user?.token;

    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    if (response) {
      if (response.status === 401) {
        window.location.href = "/Login";
      } else if (response.status === 403) {
        console.error("An 403 error occurred:", response.data.message);
        alert("not allowed to access this page");
      } else {
        console.error("An error occurred:", response.data.message);
      }
    } else {
      console.error("Network Error:", error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
