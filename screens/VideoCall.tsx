import { ScrollView, View } from "react-native";
import HeaderVideoCall from "../components/videocall/headerVideoCall";
import UserCall from "../components/videocall/userCall";
import FootVideoCall from "../components/videocall/footVideoCall";

export default function VideoCallPage() {
  return (
    <View className="flex-1 px-4">
      <HeaderVideoCall />
      <ScrollView>
        <UserCall />
      </ScrollView>
      <FootVideoCall />
    </View>
  );
}
