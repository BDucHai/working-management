import { useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import HeaderChat from "../components/chat/headerChat";
import Message from "../components/chat/message";
import ChatInput from "../components/chat/chatInput";

const ChatPage = () => {
  return (
    <View className="flex-1 ">
      <HeaderChat />
      <ScrollView className="flex-1 px-4 ">
        <Message message="What's up today,Dude? Today we must finish work" />
        <Message message="Okay that's right " />
        <Message message="I still no" your={true} />
        <Message
          message="Okay let's go come haahh. I complete ux ui"
          your={true}
        />
      </ScrollView>
      <ChatInput />
    </View>
  );
};

export default ChatPage;
