import axios from "axios";
import { BACKEND_URL } from "../constant";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosClient = async (method: any, url: string, body?: any) => {
  const instance = axios.create({
    baseURL: BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "*",
    },
  });
  instance.interceptors.request.use(
    async (config) => {
      const accessToken = await AsyncStorage.getItem("AccessToken");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (err) => {
      console.log(err.response.data);
      return err;
    }
  );
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      try {
        const originalConfig = err.config;
        if (err.response.data.statusCode == 419) {
          console.log("access token expire");
          const refreshToken = await AsyncStorage.getItem("RefreshToken");
          const newToken = await instance.post(
            `${BACKEND_URL}/auth/refresh-token`,
            {
              refreshToken,
            }
          );
          await AsyncStorage.setItem("AccessToken", newToken.data.accessToken);
          await AsyncStorage.setItem(
            "RefreshToken",
            newToken.data.refreshToken
          );
          originalConfig.headers.Authorization = `Bearer ${newToken.data.accessToken}`;
          return instance(originalConfig);
        }
      } catch (error) {}
    }
  );
  return await instance.request({
    method,
    url,
    data: body,
  });
};

export default axiosClient;
