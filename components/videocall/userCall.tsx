import { View, Text, FlatList, Image } from "react-native";
import React from "react";

import { User } from "../../types/user.type";
import { ScrollView } from "react-native-virtualized-view";
import { Feather } from "@expo/vector-icons";

const data = [
  { name: "Jane", image: undefined, mic: false },
  { name: "John", image: undefined, mic: true },
];
export default function UserCall() {
  return (
    <ScrollView className="px-4 py-4">
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View className="w-1/2 h-52 p-3 relative">
              <Image
                source={require("./../../assets/img/user.jpg")}
                className="w-full h-full rounded-lg"
              />
              <View
                className={`w-10 h-10 bg-white justify-center items-center absolute rounded-full bottom-4 right-4 border-[1px] ${
                  item.mic ? "border-green-400" : "border-red-500"
                }`}
              >
                {item.mic ? (
                  <Feather name="mic" size={20} color="#49c690" />
                ) : (
                  <Feather name="mic-off" size={20} color="#F35A54" />
                )}
              </View>
            </View>
          );
        }}
      />
    </ScrollView>
  );
}
