import { View, Text, ScrollView } from "react-native";
import React from "react";
import TeamView from "../components/meetings/teamview";
import HeaderMeeting from "../components/meetings/headerMeeting";

const MeetingPage = () => {
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
