import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function HeaderVideoCall() {
  const navigation = useNavigation();
  return (
    <View className="basis-1/6 px-4 justify-center">
      <View className="flex-row bg-[#FAFAFA] justify-around items-center py-4 rounded-full mt-10">
        <View className="w-12 h-12 rounded-full bg-[#F3F3F3] items-center justify-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="items-center gap-y-2">
          <Text className="font-semibold">Meeting Time</Text>
          <Text className="font-medium text-gray-500">01 : 24 : 38</Text>
        </View>
        <View className="flex-row gap-x-4">
          <Fontisto name="headphone" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}
