import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import Camera from "./camera";
import Img from "./img";
export default function ChatInput() {
  const [inputText, setInputText] = useState("");
  const [typing, setTyping] = useState(false);

  function handleTextChange(text: string) {
    // Update the state with the entered text

    if (text) setTyping(true);
    else setTyping(false);
    setInputText(text);
  }
  return (
    <View className="h-[68px] w-full bg-white flex-row ">
      <View className="flex-row items-center basis-1/3 justify-around">
        <TouchableOpacity className="w-6 h-6 justify-center items-center bg-primary rounded-full">
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>

        <Camera />
        <Img />
        <View className="w-1 h-10 bg-[#A1A4AF]"></View>
      </View>
      <TextInput
        placeholder="Typing something..."
        className="bg-white border-none outline-none flex-1 px-4"
        selectionColor={"#3D5CFF"}
        onChangeText={handleTextChange}
        value={inputText}
      />
      <View className="basis-1/5 justify-center items-center">
        {typing ? (
          <MaterialIcons name="send" size={24} color="#3D5CFF" />
        ) : (
          <AntDesign name="like1" size={24} color="#3D5CFF" />
        )}
      </View>
    </View>
  );
}
