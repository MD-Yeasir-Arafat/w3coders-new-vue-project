import axios from "axios";
import { useAuth, useToken } from "@/seller/stores";
// import { storeToRefs } from "pinia";

const axiosInstance = axios.create({
  baseURL: "/api/v1",
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = useToken();
    if (token.getToken) {
      const auth = `Bearer ${token.getToken}`;
      config.headers['Authorization'] = auth;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//seller auto logout

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const auth = useAuth();
      auth.removeAuthInfo();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
