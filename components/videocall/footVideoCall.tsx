import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function FootVideoCall() {
  const [openCamera, setCamera] = useState(true);
  const [openMic, setOpenMic] = useState(true);
  function handleCamera() {
    setCamera((open) => !open);
  }
  function handleMic() {
    setOpenMic((mic) => !mic);
  }
  return (
    <View className="bg-white basis-1/12 flex-row justify-around items-center">
      <View className="items-center">
        <Ionicons name="chatbubbles-outline" size={24} color="black" />
        <Text>Chat</Text>
      </View>
      <View className="items-center">
        <TouchableOpacity onPress={handleCamera}>
          {openCamera ? (
            <Feather name="video" size={24} color="black" />
          ) : (
            <Feather name="video-off" size={24} color="black" />
          )}
        </TouchableOpacity>
        <Text>Camera</Text>
      </View>
      <View className="">
        <View className="px-2 py-2 rounded-full  bg-red-600">
          <MaterialCommunityIcons name="phone-hangup" size={24} color="white" />
        </View>
      </View>
      <View className="items-center">
        <TouchableOpacity onPress={handleMic}>
          {openMic ? (
            <Feather name="mic" size={24} color="black" />
          ) : (
            <Feather name="mic-off" size={24} color="black" />
          )}
        </TouchableOpacity>
        <Text>Micro</Text>
      </View>
      <View className="items-center">
        <AntDesign name="appstore-o" size={24} color="black" />
        <Text>More</Text>
      </View>
    </View>
  );
}
