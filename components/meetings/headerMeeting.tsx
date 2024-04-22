import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { requestSocket } from "../../redux/socketSlice";
import { AppDispatch } from "../../redux/store";

export default function HeaderMeeting() {
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [nameMeeting, setNameMeeting] = useState("");
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  function createMeeting() {
    try {
      dispatch(
        requestSocket({ event: "createRoom", data: { name: nameMeeting } })
      );
      setNameMeeting("");
      toggleModal();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <View className="h-[200] mt-16 space-y-4">
      <Modal
        isVisible={isModalVisible}
        className="flex -1 justify-center items-center "
        swipeDirection="down">
        <View className="h-[200] w-full bg-slate-200 px-2 py-4 rounded-lg relative space-y-3">
          <Text className="block text-md font-semibold text-primary text-base mb-2 ">
            Meeting
          </Text>
          <TextInput
            placeholder={"Enter name meeting"}
            className="border-gray-500 border-2 px-4 py-2 rounded-lg opacity-60 focus:border-primary"
            onChangeText={(text) => setNameMeeting(text)}
            value={nameMeeting}
          />
          <TouchableOpacity
            onPress={createMeeting}
            className="bg-primary w-1/5 px-2 py-2 self-center rounded-lg items-center">
            <Text className="text-white">Create</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="absolute -right-5 -top-6"
            onPress={toggleModal}>
            <AntDesign name="closecircle" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </Modal>
      <View className="flex-row justify-between">
        <Image
          source={require("./../../assets/img/default.jpg")}
          className="w-[60px] h-[60px] rounded-full "
        />

        <TouchableOpacity
          className="flex-row gap-x-2 items-center bg-[#D8D2EC] px-4 rounded-full"
          onPress={toggleModal}>
          <FontAwesome6 name="add" size={20} color="black" />
          <Text className="font-semibold text-base text-gray-800">
            Create Meeting
          </Text>
        </TouchableOpacity>
      </View>
      <View className="h-50 flex-row bg-slate-200 px-2 py-2 items-center rounded-full space-x-4">
        <View className="w-12 h-12 bg-slate-300 justify-center items-center rounded-full">
          <AntDesign name="calendar" size={24} color="black" />
        </View>
        <View>
          <Text className="font-semibold text-lg">UX Design Meeting</Text>
          <Text className="font-medium text-slate-600">Start in 5 minutes</Text>
        </View>
      </View>
    </View>
  );
}
