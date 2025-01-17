import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
interface Infor {
  icon: string;
  content: string;
}
const listInfor: Infor[] = [
  { icon: "user", content: "Name" },
  { icon: "phone", content: "Phone Number" },
  { icon: "earth", content: "Email" },
];
export default function UserInfor() {
  return (
    <View className="flex-1 p-4 bg-white mt-4 ">
      <Text className="text-xl font-semibold text-secondary">Information</Text>
      <View className="pl-6 pr-2 space-y-4">
        <View className="basis-1/2  shrink">
          {listInfor.map((infor) => (
            <View
              key={infor.content}
              className="flex-1 flex-row justify-between items-center "
            >
              <View className="flex-1 flex-row items-center gap-x-4">
                <AntDesign name={infor.icon} size={24} color="#aaa" />
                <Text className="text-gray-500">{infor.content}</Text>
              </View>
              <View className="flex-1">
                <Text>vdat1608@gmail.com</Text>
              </View>
            </View>
          ))}
        </View>
        <View className="flex items-center ">
          <TouchableOpacity className="bg-primary w-1/2 py-4 rounded-full ">
            <Text className="text-center text-white">Update Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
