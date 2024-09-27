import React, { useEffect, useState } from "react";
import { registerRootComponent } from "expo";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./redux/store";
import SocketClient from "./socket";
import { PermissionsAndroid } from "react-native";
import {
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-native-sdk";
// const apiKey = "mmhfdzb5evj2";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSUdfODgiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0lHXzg4IiwiaWF0IjoxNzEzMTY3MTI5LCJleHAiOjE3MTM3NzE5MzR9.FZ-n5p9oBchpCqqJkBTT8FKiwAvUQB99gnVpCDDDXRA";
// const userId = "IG_88";
// const user = {
//   id: userId,
//   name: "John Malkovich",
//   image: `https://getstream.io/random_png/?id=${userId}&name=John+Malkovich`,
// };
// const client = new StreamVideoClient({ apiKey, user, token });
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
  useEffect(() => {
    const run = async () => {
      if (Platform.OS === "android") {
        await PermissionsAndroid.requestMultiple([
          "android.permission.POST_NOTIFICATIONS",
          "android.permission.BLUETOOTH_CONNECT",
        ]);
      }
    };
    run();
  }, []);
  return (
    <Provider store={store}>
      {/* <StreamVideo client={client}> */}
      <App />
      <Toast config={toastConfig} />
      {/* </StreamVideo> */}
    </Provider>
  );
};

export default registerRootComponent(Index);
