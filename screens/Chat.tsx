import { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import HeaderChat from "../components/chat/headerChat";
import Message from "../components/chat/message";
import ChatInput from "../components/chat/chatInput";
import { useDispatch, useSelector } from "react-redux";
import {
  receiveListMessage,
  receiveSocket,
  requestSocket,
  saveCurrentRoom,
  saveCurrentRoomId,
  selectRooms,
} from "../redux/socketSlice";
import { AppDispatch } from "../redux/store";
import { Room } from "../types/room.type";
import { useRoute } from "@react-navigation/native";
import { ChatScreenRouteProp } from "../navigation/types";
import MessageDetail from "../components/chat/message";

const ChatPage = () => {
  const route = useRoute<ChatScreenRouteProp>();
  const room: Room = route.params.room;

  const dispatch: AppDispatch = useDispatch();
  const listRooms = useSelector(selectRooms);
  const roomIndex = listRooms.findIndex((data) => data.id === room.id);
  const listMessages = listRooms.at(roomIndex)?.messages;
  // console.log(listMessages);
  useEffect(() => {
    dispatch(
      requestSocket({
        event: "requestAllMessagesInRoom",
        data: { roomId: room.id },
      })
    );

    dispatch(receiveListMessage({ roomIndex }));
    dispatch(saveCurrentRoom(room.name.split(" ").join("-")));
    dispatch(saveCurrentRoomId(room.id));
  }, []);
  return (
    <View className="flex-1">
      <HeaderChat
        numberMember={room.numberMember}
        name={room.name}
        roomId={room.id}
      />
      <ScrollView className="flex-1 px-4 ">
        {listMessages?.map((message) => (
          <MessageDetail key={message.id} message={message} />
        ))}
      </ScrollView>
      <ChatInput room={room} />
    </View>
  );
};

export default ChatPage;
