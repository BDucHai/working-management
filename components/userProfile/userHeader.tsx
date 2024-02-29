import { View, Text, Image } from "react-native";
import React from "react";

export default function UserHeader() {
  return (
    <View>
      <View className="h-[150px] bg-primary"></View>

      <View className="bg-white justify-center items-center pt-4">
        <Image
          source={require("./../../assets/img/user.jpg")}
          className="w-[86px] h-[86px] rounded-full transform -translate-y-16"
        />

        <View className="items-center space-y-2 transform -translate-y-16">
          <Text className="text-blue-300 text-lg ">@johnsmith</Text>
          <Text className="font-semibold text-2xl text-gray-700 ">
            John Smith
          </Text>
          <View className="flex flex-row gap-x-1">
            <Text className="italic">Software Engineer</Text>
            <Text className="text-primary">| Joined Aug 2023</Text>
          </View>
          <View className="w-4/5">
            <Text className="text-center leading-5 text-gray-500 ">
              CEO System D Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Maxime distinctio vel libero illo quia voluptatum modi
              nostrum tempore. Ut temporibus recusandae perferendis magni
              nesciunt. Repellat voluptates accusantium maxime repudiandae
              ducimus? lorem
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
