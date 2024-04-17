import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {} from "socket.io-client";
import { socketClient } from "..";
import { Room } from "../types/room.type";
import { Message } from "./../types/message.type";
interface ISocket {
  status: "connect" | "disconnect" | "pending";
  rooms: Room[];
  currentRoom: string;
}
const initialState: ISocket = {
  status: "disconnect",
  rooms: [],
  currentRoom: "",
};
export const connectSocket = createAsyncThunk(
  "socket/connect",
  async (token: string) => {
    try {
      await socketClient.connect(token);
    } catch (err) {
      await socketClient.disconnect();
      console.log(err);
    }
    return;
  }
);
export const disConnectSocket = createAsyncThunk(
  "socket/disconnect",
  async () => {
    return await socketClient.disconnect();
  }
);
export const requestSocket = createAsyncThunk(
  "socket/requestSocket",
  async (payload: { event: string; data: any }) => {
    try {
      await socketClient.emit(payload.event, payload.data);
    } catch (err) {
      console.log(err);
    }
    return;
  }
);
export const receiveSocket = createAsyncThunk(
  "socket/receiveSocket",
  async (payload: { event: string; type: string }, { getState, dispatch }) => {
    try {
      const { event, type } = payload;

      await socketClient.on(event, (data: any) => {
        // console.log(data);
        dispatch({ type: `socket/${type}`, payload: data });
      });
      // return response;
    } catch (err) {
      console.log(err);
    }
    return;
  }
);
export const receiveListMessage = createAsyncThunk(
  "socket/receiveListMessages",
  async (payload: { roomIndex: number }, { getState, dispatch }) => {
    try {
      const { roomIndex } = payload;
      // if (!roomIndex) return;
      await socketClient.on("responseAllMessagesInRoom", (data: Message[]) => {
        dispatch(saveAllMessagesInRoom({ data, roomIndex }));
      });
    } catch (err) {}
  }
);
const SocketState = createSlice({
  name: "socket",
  initialState,
  reducers: {
    saveListRoom(state, action) {
      state.rooms = action.payload;
    },
    clearSocket(state) {
      state.rooms = [];
    },
    saveAllMessagesInRoom(
      state,
      action: { payload: { roomIndex: number; data: Message[] } }
    ) {
      const { data, roomIndex } = action.payload;
      state.rooms[roomIndex].messages = data;
    },
    saveCurrentRoom(state, action) {
      state.currentRoom = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectSocket.pending, (state) => {
        // state.status = "pending";
      })
      .addCase(connectSocket.fulfilled, (state) => {
        // state.status = "connect";
      })
      .addCase(connectSocket.rejected, (state) => {
        // console.log("Disconnect error");
        // state.status = "disconnect";
      })
      .addCase(requestSocket.fulfilled, (state) => {
        // console.log("GET LIST ROOM SUCCESS");
      })
      .addCase(requestSocket.rejected, (state) => {
        // console.log("GET LIST ROOM FAIL");
      })
      .addCase(receiveSocket.fulfilled, (state, payload) => {})
      .addCase(receiveSocket.rejected, (state) => {});
  },
});

export const selectSocket = (state: RootState) => state.socket.status;
export const selectRooms = (state: RootState) => state.socket.rooms;
export const selectCurrentRoom = (state: RootState) => state.socket.currentRoom;
export const {
  clearSocket,
  saveListRoom,
  saveAllMessagesInRoom,
  saveCurrentRoom,
} = SocketState.actions;
export default SocketState.reducer;
