import { Button, Text, View } from "react-native";
import Header from "../components/homepages/header";
import SlideShow from "../components/homepages/slideshow";
import Meeting from "../components/homepages/meeting";
import Upcomming from "../components/homepages/upcoming";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/authSlice";
import { selectInvitation } from "../redux/socketSlice";
import InvitationModal from "../components/meetings/invitationModal";

const HomePage = () => {
  // const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);
  const { from, room, fromSocket, roomId } = useSelector(selectInvitation);

  return (
    <View className="flex-1">
      <Header user={user} />
      {
        <InvitationModal
          from={from}
          room={room}
          fromSocket={fromSocket}
          name={user?.name}
          userId={user?.id}
          roomId={roomId}
        />
      }
      <View className="px-4 transform -translate-y-6 ">
        <SlideShow />
        <Upcomming />
        <Meeting />
        {/* <Meeting /> */}
      </View>
    </View>
  );
};

export default HomePage;
