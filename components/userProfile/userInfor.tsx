import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { User } from "../../types/user.type";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout } from "../../redux/authSlice";
import { AppDispatch } from "../../redux/store";
import { clearSocket } from "../../redux/socketSlice";
interface Infor {
  icon: string;
  content: string;
}
const listInfor: Infor[] = [
  { icon: "user", content: "Name" },
  { icon: "phone", content: "Phone Number" },
  { icon: "earth", content: "Email" },
];
export default function UserInfor({ user }: { user: User | null }) {
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
    dispatch(clearSocket());
    navigation.navigate("User", { screen: "Login" });
  }
  return (
    <View className="flex-1 p-4 bg-white mt-4 ">
      <Text className="text-xl font-semibold text-secondary">Information</Text>
      <View className="pl-6 pr-2 space-y-4">
        <View className="basis-1/2  shrink">
          {listInfor.map((infor) => (
            <View
              key={infor.content}
              className="flex-1 flex-row justify-between items-center ">
              className="flex-1 flex-row justify-between items-center ">
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
          <TouchableOpacity
            className="bg-primary w-1/2 py-4 rounded-full "
            onPress={() => {
              handleLogout();
            }}>
            <Text className="text-center text-white">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
