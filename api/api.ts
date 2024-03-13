import axios, { AxiosRequestConfig } from "axios";
import { BACKEND_URL } from "../constant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Token } from "../types/token.type";

export default function requestApi(url: string, method: string, body?: any) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Methods": "*",
  };
  const instance = axios.create({ headers, baseURL: BACKEND_URL });
  instance.interceptors.request.use(
    async (config) => {
      console.log("access token in header");
      const token = await AsyncStorage.getItem("AccessToken");
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originConfig = error.config;
      if (error.response && error.response.status === 419) {
        console.log("refresh token");
        const refresh = await AsyncStorage.getItem("RefreshToken");
        const { accessToken, refreshToken } = await instance.post(
          `${BACKEND_URL}/auth/refresh-token`,
          refresh
        );
        AsyncStorage.setItem("AccessToken", accessToken);
        AsyncStorage.setItem("RefreshToken", refreshToken);
        console.log(refreshToken);
        originConfig.headers["Authorization"] = `Beare ${accessToken}`;
        return originConfig;
      }
    }
  );
  return instance.request({
    url: url,
    method,
    data: method != "GET" ? body : null,
  });
}
