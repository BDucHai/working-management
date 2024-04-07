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
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/authSlice";
import { Room } from "../../types/room.type";
import { AppDispatch } from "../../redux/store";
import { requestSocket } from "../../redux/socketSlice";
export default function ChatInput({ room }: { room: Room }) {
  const dispatch: AppDispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [typing, setTyping] = useState(false);
  const user = useSelector(selectCurrentUser);
  function handleTextChange(text: string) {
    // Update the state with the entered text
    setTyping(text ? true : false);
    setInputText(text);
  }
  function hanleCreateMessage() {
    dispatch(
      requestSocket({
        event: "createMessage",
        data: {
          userId: user?.id,
          roomId: room.id,
          message: inputText,
          mimeType: null,
        },
      })
    );
    setTyping(false);
    setInputText("");
  }
  return (
    <View className="h-[68px] w-full bg-white flex-row ">
      <View className="flex-row items-center basis-1/3 justify-around">
        <TouchableOpacity className="w-6 h-6 justify-center items-center bg-primary rounded-full">
          <Ionicons name="add" size={20} color="white" />
        </TouchableOpacity>

        <Camera />
        <Img userId={user?.id} roomId={room.id} />
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
        <TouchableOpacity onPress={hanleCreateMessage}>
          {typing ? (
            <MaterialIcons name="send" size={24} color="#3D5CFF" />
          ) : (
            <AntDesign name="like1" size={24} color="#3D5CFF" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
