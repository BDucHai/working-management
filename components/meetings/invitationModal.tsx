import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";

import { AntDesign } from "@expo/vector-icons";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  requestSocket,
  resetInform,
  resetRefuseMessage,
  selectCurrentRoom,
  selectCurrentRoomId,
} from "../../redux/socketSlice";
import { name } from "@stream-io/video-react-native-sdk";
import { selectCurrentUser } from "../../redux/authSlice";
const InvitationModal = ({
  from,
  room,
  fromSocket,
  name,
  userId,
  roomId,
}: {
  from: string;
  room: string;
  fromSocket: string;
  name: string | undefined;
  userId: number | undefined;
  roomId: number | undefined;
}) => {
  const dispatch: AppDispatch = useDispatch();
  function handleAceptInvite() {
    dispatch(
      requestSocket({
        event: "aceptJoinRoom",
        data: {
          userId,
          roomId: roomId,
          socketResponse: fromSocket,
          from,
        },
      })
    );
    dispatch(resetInform());
  }
  function handleRefuseInvite() {
    dispatch(
      requestSocket({
        event: "refuseJoin",
        data: {
          to: fromSocket, // socket id refuse
          from: name, //username
        },
      })
    );
    dispatch(resetInform());
  }
  return (
    <Modal
      isVisible={from.length > 0 ? true : false}
      className="flex-1 "
      swipeDirection="down">
      <View className="min-h-[150] w-full bg-slate-200 px-2 py-4 rounded-lg relative space-y-3">
        <View className="flex-row gap-2">
          <AntDesign name="clockcircleo" size={24} color="red" />
          <Text className="block text-md text-base mb-2 font-semibold ">
            {from} invite you to join room {room}
          </Text>
        </View>
        <TouchableOpacity
          className="absolute -right-5 -top-6"
          onPress={() => dispatch(resetInform())}>
          <AntDesign name="closecircle" size={30} color="white" />
        </TouchableOpacity>
        <View className="flex-row justify-around px-8">
          <TouchableOpacity
            onPress={handleAceptInvite}
            className="bg-primary w-1/3 px-2 py-4 self-center rounded-lg items-center">
            <Text className="text-white">Acept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRefuseInvite}
            className="bg-slate-500 w-1/3 px-2 py-4 self-center rounded-lg items-center">
            <Text className="text-white">No, thanks</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default InvitationModal;
