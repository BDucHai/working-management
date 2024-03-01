import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function TeamView({ calling }: { calling?: boolean }) {
  return (
    <View
      className={`${
        calling ? "bg-[#E4E7F6]" : "bg-[#D0E7E1] "
      } mt-4 px-4 py-4 rounded-lg space-y-4`}
    >
      <Text className="text-lg font-medium">User Interface Desgin</Text>
      {calling && (
        <Text className="text-xs text-primary">Calling about 5 minutes</Text>
      )}

      <View className="flex-row justify-between">
        <Text className="font-semibold text-gray-600">12 members</Text>
        <Text className="font-semibold text-gray-600">John Smith's room</Text>
      </View>
      <TouchableOpacity>
        <View className="w-1/3 bg-primary py-2 rounded-full">
          <Text className="text-white text-sm font-medium text-center">
            Join Now
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
