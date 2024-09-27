import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import axiosClient from "../../api/api";
import { BACKEND_URL } from "../../constant";
import UserModal from "./userModal";
import Loading from "../globalLoading";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { requestSocket } from "../../redux/socketSlice";
const AddUserModal = ({
  isModalVisible,
  toggleModal,
  name,
  roomId,
}: {
  isModalVisible: boolean;
  toggleModal: () => void;
  name: string;
  roomId: number | undefined;
}) => {
  const [nameUser, setNameUser] = useState("");
  const [listUser, setListUser] = useState([]);
  const [numberInvite, setNumberInvite] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [listUserInvite, setListUserInvite] = useState<number[]>([]);
  const dispatch: AppDispatch = useDispatch();
  async function searchUser() {
    Keyboard.dismiss();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    const data = await axiosClient(
      "get",
      `${BACKEND_URL}/users?key=${nameUser}`
    );

    setListUser(data.data);
    setNameUser("");
  }
  function handleSelectIncrease(id: number) {
    setNumberInvite((numberInvite) => numberInvite + 1);
    setListUserInvite((lst) => [...lst, id]);
  }
  function handleSelectDecrease(id: number) {
    setNumberInvite((numberInvite) => numberInvite - 1);
    setListUserInvite((lst) => lst.filter((item) => item !== id));
  }
  function sendInvite() {
    setIsSending(true);
    dispatch(
      requestSocket({
        event: "inviteToRoom",
        data: { users: listUserInvite, room: name, roomId },
      })
    );
    setTimeout(() => {
      setIsSending(false);
      setNumberInvite(0);
      setListUserInvite([]);
      setListUser([]);
    }, 1000);
  }
  return (
    <Modal isVisible={isModalVisible} className="flex-1 " swipeDirection="down">
      <View className="min-h-[200] w-full bg-slate-200 px-2 py-4 rounded-lg relative space-y-3">
        <View className="flex-row gap-2">
          <AntDesign name="adduser" size={24} color="black" />
          <Text className="block text-md font-semibold  text-base mb-2 ">
            Invite User
          </Text>
        </View>
        <View className="flex-row space-x-2">
          <TextInput
            placeholder={"Search name user"}
            className="border-gray-500 border-2 px-4 py-2 rounded-lg opacity-60 focus:border-primary flex-1"
            onChangeText={(text) => setNameUser(text)}
            value={nameUser}
          />
          <TouchableOpacity
            onPress={searchUser}
            className="w-12 h-12 bg-slate-300 rounded-lg justify-center items-center">
            <FontAwesome name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          {isLoading ? (
            <Loading />
          ) : (
            <View>
              {listUser.map((user) => {
                const { position, name, id } = user;
                return (
                  <UserModal
                    key={id}
                    handleSelectIncrease={handleSelectIncrease}
                    handleSelectDecrease={handleSelectDecrease}
                    id={id}
                    name={name}
                    position={position}
                  />
                );
              })}
            </View>
          )}
        </View>
        {numberInvite && (
          <TouchableOpacity
            onPress={sendInvite}
            className="bg-primary w-1/2 px-2 py-4 self-center rounded-lg items-center">
            <Text className="text-white">
              {isSending ? "Sending" : "Invite to"} {numberInvite} users
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          className="absolute -right-5 -top-6"
          onPress={toggleModal}>
          <AntDesign name="closecircle" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AddUserModal;
