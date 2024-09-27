import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user.type";
import { RootState } from "./store";
import axios, { AxiosError } from "axios";
import { BACKEND_URL } from "../constant";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface Auth {
  user: User | null;
  token: {
    accessToken?: string;
    refreshToken?: string;
  };
  loading: boolean;
  error: string | undefined;
  isLogin: boolean;
}
const initialState: Auth = {
  user: null,
  token: {},
  loading: false,
  error: undefined,
  isLogin: false,
};
export const signUp = createAsyncThunk(
  "auth/signup",
  async (data: {
    name: string;
    email: string;
    password: string;
    position: string;
  }) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/signup`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      return error.response?.data;
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }) => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/auth/login`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (err) {
      const error = err as AxiosError;
      return error.response?.data;
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  await AsyncStorage.setItem("AccessToken", "");
  await AsyncStorage.setItem("RefreshToken", "");
  return;
});
const authState = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeLogin(state) {
      state.isLogin = !state.isLogin;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        if (!action.payload.message) {
          // state.user = action.payload;
          state.error = undefined;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.message) {
          state.error = payload.message;
        } else {
          const { user, accessToken, refreshToken } = payload;
          state.user = user;
          state.token = { accessToken, refreshToken };
        }
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.error);
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        console.log("remove success"),
          (state.user = null),
          (state.token.accessToken = "");
        state.token.refreshToken = "";
        state.isLogin = false;
      });
  },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsLoading = (state: RootState) => state.auth.loading;
export const selectError = (state: RootState) => state.auth.error;
export const selectToken = (state: RootState) => state.auth.token;
export const { changeLogin } = authState.actions;
export default authState.reducer;
