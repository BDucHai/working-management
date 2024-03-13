import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Token } from "../types/token.type";
const initialState: Token = {
  accessToken: undefined,
  refreshToken: undefined,
};
const tokenState = createSlice({
  name: "token",
  initialState,
  reducers: {
    saveToken(state, action: PayloadAction<Token>) {
      return action.payload;
    },
  },
});
export const { saveToken } = tokenState.actions;
export default tokenState.reducer;
