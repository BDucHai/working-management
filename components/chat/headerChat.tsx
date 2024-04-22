import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AddUserModal from "./addUserModal";

export default function HeaderChat({
  numberMember,
  name,
  roomId,
}: {
  numberMember: number;
  name: string;
  roomId: number | undefined;
}) {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  function toggleModal() {
    setModalVisible(!isModalVisible);
  }
  return (
    <View className="h-200 px-4 justify-center">
      {isModalVisible && (
        <AddUserModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          name={name}
          roomId={roomId}
        />
      )}
      <View className="flex-row bg-[#FAFAFA] justify-around items-center py-4 rounded-full mt-10">
        <View className="w-12 h-12 rounded-full bg-[#F3F3F3] items-center justify-center">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="items-center gap-y-2">
          <Text className="font-semibold">{name}</Text>
          <Text className="font-medium text-gray-500">
            {numberMember} Members
          </Text>
        </View>
        <View className="flex-row gap-x-4">
          <TouchableOpacity onPress={toggleModal}>
            <AntDesign name="addusergroup" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Meeting", {
                screen: "Video",
              })
            }>
            <FontAwesome5 name="video" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
