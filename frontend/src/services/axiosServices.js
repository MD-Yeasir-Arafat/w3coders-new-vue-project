import axios from "axios";
import { useAuth } from "@/stores";
// import { storeToRefs } from "pinia";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/v1",
});

axiosInstance.interceptors.request.use(
  function (config) {
    const authInfo = useAuth();
    // const user = storeToRefs(authInfo);
    // const auth = authInfo.user.data ? `Bearar ${authInfo.user.meta.token}` : "";
    if (authInfo.user.meta) {
      const auth = `Bearer ${authInfo.user.meta.token}`;
      config.headers['Authorization'] = auth;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
