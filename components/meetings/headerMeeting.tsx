import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

export default function HeaderMeeting() {
  return (
    <View className="basis-1/5 mt-16 space-y-4">
      <View className="flex-row justify-between">
        <Image
          source={require("./../../assets/img/user.jpg")}
          className="w-[60px] h-[60px] rounded-full "
        />
        <View className="flex-row gap-x-2 items-center bg-[#D8D2EC] px-4 rounded-full">
          <FontAwesome6 name="add" size={20} color="black" />
          <Text className="font-semibold text-base text-gray-800">
            Join Meeting
          </Text>
        </View>
      </View>
      <View className="flex-row bg-slate-200 px-2 py-2 items-center rounded-full space-x-4">
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
