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
  currentRoomId: number;
  invitation: {
    from: string;
    fromSocket: string;
    room: string;
    roomId: number | undefined;
  };
  refuseMessage: string | undefined;
  aceptMessage: string | undefined;
  message: {
    from: string | undefined;
    room: string | undefined;
    content: string | undefined;
  };
}
const initialState: ISocket = {
  status: "disconnect",
  rooms: [],
  currentRoom: "",
  currentRoomId: 0,
  invitation: { from: "", room: "", fromSocket: "", roomId: undefined },
  refuseMessage: undefined,
  aceptMessage: undefined,
  message: {
    content: undefined,
    from: undefined,
    room: undefined,
  },
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
  async (payload: { event: string; type?: string }, { getState, dispatch }) => {
    try {
      const { event, type } = payload;
      await socketClient.on(event, (data: any) => {
        console.log(data);
        if (type) dispatch({ type: `socket/${type}`, payload: data });
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
    saveCurrentRoomId(state, action) {
      state.currentRoomId = action.payload;
    },
    informMessage(state, action) {
      console.log(action.payload);
      state.message = action.payload;
    },
    resetInformMessage(state) {
      state.message = {
        content: undefined,
        from: undefined,
        room: undefined,
      };
    },
    inform(state, action) {
      state.invitation = action.payload;
    },
    resetInform(state) {
      state.invitation = {
        from: "",
        room: "",
        fromSocket: "",
        roomId: undefined,
      };
    },
    refuseMessage(state, action) {
      state.refuseMessage = action.payload;
    },
    aceptMessage(state, action) {
      state.aceptMessage = action.payload;
    },
    resetAceptMessage(state) {
      state.aceptMessage = undefined;
    },
    resetRefuseMessage(state) {
      state.refuseMessage = undefined;
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
export const selectCurrentRoomId = (state: RootState) =>
  state.socket.currentRoomId;
export const selectInvitation = (state: RootState) => state.socket.invitation;
export const selectRefuseMessage = (state: RootState) =>
  state.socket.refuseMessage;
export const selectAceptMessage = (state: RootState) =>
  state.socket.aceptMessage;
export const selectInformMessage = (state: RootState) => state.socket.message;
export const {
  clearSocket,
  saveListRoom,
  saveAllMessagesInRoom,
  saveCurrentRoom,
  saveCurrentRoomId,
  resetInformMessage,
  resetInform,
  resetRefuseMessage,
  resetAceptMessage,
} = SocketState.actions;
export default SocketState.reducer;
