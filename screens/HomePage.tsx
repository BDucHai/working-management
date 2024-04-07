import { Button, Text, View } from "react-native";
import Header from "../components/homepages/header";
import SlideShow from "../components/homepages/slideshow";
import Meeting from "../components/homepages/meeting";
import Upcomming from "../components/homepages/upcoming";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/authSlice";

const HomePage = () => {
  // const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);
  return (
    <View className="flex-1">
      <Header user={user} />
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
