import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import TeamView from "../components/meetings/teamview";
import HeaderMeeting from "../components/meetings/headerMeeting";
import requestApi from "../api/api";
import axiosClient from "../api/api";
import { AxiosError } from "axios";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/authSlice";
import { useNavigation } from "@react-navigation/native";

const MeetingPage = () => {
  const user = useSelector(selectCurrentUser);
  const navigation = useNavigation();
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await axiosClient("GET", `/users/${user?.id}`);
        console.log(res.data);
      } catch (err) {
        const error = err as AxiosError;
        console.log(error.response?.data);
        navigation.navigate("User", {
          screen: "Login",
        });
      }
    }
    fetchProfile();
  }, []);
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
