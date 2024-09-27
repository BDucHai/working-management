import { View, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import TeamView from "../components/meetings/teamview";
import HeaderMeeting from "../components/meetings/headerMeeting";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../redux/store";
import {
  receiveSocket,
  requestSocket,
  saveCurrentRoom,
  selectRooms,
} from "../redux/socketSlice";

const MeetingPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const listRooms = useSelector(selectRooms);

  useEffect(() => {
    dispatch(requestSocket({ event: "requestListRoom", data: null }));
    dispatch(receiveSocket({ event: "getListRoom", type: "saveListRoom" }));
    dispatch(saveCurrentRoom(""));
  }, [dispatch]);
  return (
    <View className="flex-1 px-4">
      <HeaderMeeting />

      {listRooms.length !== 0 ? (
        <ScrollView>
          {listRooms.map((room) => (
            <TeamView key={room.id} room={room} />
          ))}
        </ScrollView>
      ) : (
        <View className="items-center">
          <Text className="font-semibold text-primary ">
            You aren't join meeting yet{" "}
          </Text>
        </View>
      )}
    </View>
  );
};

export default MeetingPage;
