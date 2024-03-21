import React from "react";
import App from "./App";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
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

const Index = () => {
  return (
    <Provider store={store}>
      <App />
      <Toast config={toastConfig} />
    </Provider>
  );
};

export default registerRootComponent(Index);
