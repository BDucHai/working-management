import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import TeamView from "../components/meetings/teamview";
import HeaderMeeting from "../components/meetings/headerMeeting";
import requestApi from "../api/api";

const MeetingPage = () => {
  useEffect(() => {
    async function fetchUser() {
      const users = await requestApi("/users", "GET");
      console.log(users);
    }
    fetchUser();
  });
  return (
    <View className="flex-1 px-4">
      <HeaderMeeting />
      <ScrollView>
        <TeamView calling={true} />
        <TeamView />
      </ScrollView>
    </View>
  );
};

export default MeetingPage;
