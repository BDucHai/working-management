import { View, Text, Image } from "react-native";
import React from "react";
import { Message } from "../../types/message.type";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/authSlice";

export default function MessageDetail({ message }: { message: Message }) {
  const user = useSelector(selectCurrentUser);
  const myMessage = message.user.id === user?.id;
  const base64regex =
    /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  const isImage = base64regex.test(message.content);
  return (
    <View
      className={`mt-4 space-x-4 flex-row ${
        myMessage ? "flex-row-reverse" : ""
      }`}>
      {!myMessage && (
        <Image
          source={require("./../../assets/img/user.jpg")}
          className="w-[40px] h-[40px] rounded-full self-start"
        />
      )}
      <View>
        {!myMessage && <Text className="text-[12px]">{message.user.name}</Text>}

        <View
          className={`rounded-full ${
            myMessage ? "bg-primary rounded-tr-sm " : "bg-white rounded-bl-sm"
          } px-4 py-4  max-w-[250px] ${isImage ? "p-0" : ""}`}>
          {!isImage ? (
            <Text className={`${myMessage ? "text-white" : ""} font-medium`}>
              {message.content}
            </Text>
          ) : (
            <Image
              source={{
                uri: `data:${message.mimeType};base64,${message.content}`,
              }}
              style={{ height: 200, width: 200 }}
            />
          )}
        </View>
      </View>
    </View>
  );
}
