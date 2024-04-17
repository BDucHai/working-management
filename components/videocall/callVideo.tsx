import { ScrollView, Text, View } from "react-native";
import {
  Call,
  CallContent,
  StreamCall,
  useStreamVideoClient,
} from "@stream-io/video-react-native-sdk";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectCurrentRoom } from "../../redux/socketSlice";
import { useSelector } from "react-redux";

export default function VideoCall() {
  const [call, setCall] = useState<Call | null>(null);

  const client = useStreamVideoClient();
  const navigation = useNavigation();
  const callType = "default";
  const callId = useSelector(selectCurrentRoom);
  useEffect(() => {
    async function connectVideoCall() {
      try {
        console.log(client?.state);
        if (!client) return;
        const call = client.call(callType, callId);
        await call.join({ create: true });
        setCall(call);
      } catch (err) {
        console.log(err);
      }
    }
    connectVideoCall();
  }, [client]);
  if (!call) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Joining call ${callId}...</Text>
      </View>
    );
  }
  return (
    <StreamCall call={call}>
      <CallContent
        onBackPressed={() => {
          navigation.navigate("Meeting", { screen: "ListMeeting" });
          client?.disconnectUser();
        }}
      />
    </StreamCall>
  );
}
