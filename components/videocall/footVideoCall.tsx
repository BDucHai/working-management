import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function FootVideoCall() {
  const [openCamera, setCamera] = useState(true);
  function handleCamera() {
    setCamera((open) => !open);
  }
  return (
    <View className="bg-red-200 basis-1/12  flex-row">
      <Ionicons name="chatbubbles-outline" size={24} color="black" />
      <View>
        <TouchableOpacity onPress={handleCamera}>
          {openCamera ? (
            <MaterialIcons name="videocam" size={24} color="black" />
          ) : (
            <MaterialIcons name="videocam-off" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      <View className="px-2 py-[2px]  bg-red-600">
        <MaterialCommunityIcons name="phone-hangup" size={24} color="black" />
      </View>
    </View>
  );
}
