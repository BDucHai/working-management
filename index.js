import React, { useEffect, useState } from "react";
import { registerRootComponent } from "expo";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./redux/store";
import SocketClient from "./socket";
const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "#00ff3f" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "600",
        color: "#3D5CFF",
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "#3D5CFF" }}
      text1Style={{
        fontSize: 15,
        fontWeight: "600",
        color: "#ea1010",
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

export const socketClient = new SocketClient();
const Index = () => {
  return (
    <Provider store={store}>
      <App />
      <Toast config={toastConfig} />
    </Provider>
  );
};

export default registerRootComponent(Index);
