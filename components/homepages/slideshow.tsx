import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";

const images = [
  {
    id: 1,
    source: require("./../../assets/img/getJob.png"),
    content: "What will you do today? ",
    link: true,
  },
  {
    id: 2,
    source: require("./../../assets/img/getJob2.png"),
    content: "Connect with your team ",
    link: false,
  },
  //   { id: 3, source: require("./../../assets/img/getJob.png") },
  // Thêm các ảnh khác nếu cần
];

const SlideShow = () => {
  const { navigate } = useNavigation();
  return (
    <FlatList
      data={images}
      horizontal
      renderItem={({ item }) => (
        <View className="bg-[#CEECFE] px-2 py-4 rounded-lg w-64 mr-4">
          <Text className="text-lg ml-2">{item.content} </Text>
          <View className="flex flex-row gap-4">
            {item.link && (
              <TouchableOpacity
                onPress={() => navigate("User", { screen: "Login" })}
                className="bg-[#F99A3D] w-28 h-10 py-2 rounded-lg self-end"
              >
                <Text className="text-white font-semibold text-center ">
                  Get Started
                </Text>
              </TouchableOpacity>
            )}
            <Image source={item.source} style={styles.image} />
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100, // Định kích thước cho ảnh
    height: 100, // Định kích thước cho ảnh
    margin: 10, // Khoảng cách giữa các ảnh
  },
});

export default SlideShow;
