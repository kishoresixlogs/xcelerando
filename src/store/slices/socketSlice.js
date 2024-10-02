import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const initialState = {
  socket: null,
};

const socketSlice = createSlice({
  name: "sockets",
  initialState,
  reducers: {
    socketConnection: (state) => {
      if (!state.socket) {
        const socket = io(process.env.REACT_APP_APIURL);
        socket.on("connect", () => {
          console.log("socket connected", socket.id);
        });
        state.socket = socket;
      }
    },
    disconnectSocket: (state) => {
      if (state.socket) {
        state.socket.disconnect();
        console.log("socket Disconnected");
        state.socket = null;
      }
    },
    sendMessageEmit: (state, action) => {
      state?.socket?.emit("send_message", {
        sender_id: action?.payload?.sender_id,
        receiver_id: action?.payload?.receiver_id,
        message: action?.payload?.message,
        files: action?.payload?.files,
      });
    },
    getMessagesEmit: (state, action) => {
      state?.socket?.emit("get_messages", {
        sender_id: action?.payload?.sender_id,
        receiver_id: action?.payload?.receiver_id,
      });
    },
    sendGroupMessageEmit: (state, action) => {
      state?.socket?.emit("send_group_message", {
        sender_id: action?.payload?.sender_id,
        categoryId: action?.payload?.categoryId,
        message: action?.payload?.message,
        files: action?.payload?.files,
      });
    },
    getGroupMessagesEmit: (state, action) => {
      state?.socket?.emit("get_group_messages", {
        sender_id: action?.payload?.sender_id,
        categoryId: action?.payload?.categoryId,
      });
    },
    notificationCount: (state, action) => {
      state?.socket?.emit("notificationCount", {
        userId: action?.payload?.userId,
      });
    },
  },
});
export const getSocket = (state) => state?.sockets?.socket;
export const { socketConnection, disconnectSocket, sendMessageEmit, getMessagesEmit, sendGroupMessageEmit, getGroupMessagesEmit, notificationCount } = socketSlice.actions;
export default socketSlice.reducer;
