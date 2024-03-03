import { View, Text, Image } from "react-native";
import React from "react";

export default function Message({
  message,
  your,
}: {
  message: string;
  your?: boolean;
}) {
  return (
    <View
      className={`mt-4 space-x-4 flex-row ${your ? "flex-row-reverse" : ""}`}
    >
      {!your && (
        <Image
          source={require("./../../assets/img/user.jpg")}
          className="w-[40px] h-[40px] rounded-full self-start"
        />
      )}
      <View>
        {!your && <Text className="text-[12px]">John</Text>}
        <View
          className={`rounded-full ${
            your ? "bg-primary rounded-tr-sm " : "bg-white rounded-bl-sm"
          } px-4 py-4  max-w-[250px]`}
        >
          <Text className={`${your ? "text-white" : ""} font-medium`}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
}
