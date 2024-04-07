import { View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import TeamView from "../components/meetings/teamview";
import HeaderMeeting from "../components/meetings/headerMeeting";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../redux/store";
import {
  receiveSocket,
  requestSocket,
  selectRooms,
} from "../redux/socketSlice";

const MeetingPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const listRooms = useSelector(selectRooms);
  // console.log(listRooms);
  console.log("hi");
  useEffect(() => {
    dispatch(requestSocket({ event: "requestListRoom", data: null }));
    dispatch(receiveSocket({ event: "getListRoom", type: "saveListRoom" }));
  }, []);
  return (
    <View className="flex-1 px-4">
      <HeaderMeeting />
      <ScrollView>
        {listRooms.map((room) => (
          <TeamView key={room.id} room={room} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MeetingPage;
