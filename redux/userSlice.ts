import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user.type";
import AsyncStorage from "@react-native-async-storage/async-storage";
const initialState: User = { name: undefined, email: undefined };

const userState = createSlice({
  name: "user",
  initialState,
  reducers: {
    displayUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});
export const { displayUser } = userState.actions;
export default userState.reducer;
