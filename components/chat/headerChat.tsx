import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HeaderChat() {
  const navigation = useNavigation();
  return (
    <View className="basis-1/6 px-4 justify-center">
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
          <Text className="font-semibold">F4 PTIT</Text>
          <Text className="font-medium text-gray-500">4 Members</Text>
        </View>
        <View className="flex-row gap-x-4">
          <FontAwesome name="phone" size={24} color="black" />
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
