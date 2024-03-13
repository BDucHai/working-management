import { Button, Text, View } from "react-native";
import Header from "../components/homepages/header";
import SlideShow from "../components/homepages/slideshow";
import Meeting from "../components/homepages/meeting";
import Upcomming from "../components/homepages/upcoming";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { saveToken } from "../redux/tokenSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const boostrapAsync = async () => {
      try {
        const accessToken = await AsyncStorage.getItem("AccessToken");
        const refreshToken = await AsyncStorage.getItem("RefreshToken");
        console.log(accessToken + ";" + refreshToken);
        if (accessToken && refreshToken)
          dispatch(saveToken({ accessToken, refreshToken }));
      } catch {}
    };
    boostrapAsync();
  }, []);
  const user = useSelector((state: RootState) => state.user);
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
