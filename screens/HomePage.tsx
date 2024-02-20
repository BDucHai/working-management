import { Button, Text, View } from "react-native";
import Header from "../components/homepages/header";

const HomePage = ({ navigation }: { navigation: any }) => {
  return (
    <View className="flex-1">
      <Header />
      <Text className="text-red-600">HomePage</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("user")}
      />
    </View>
  );
};

export default HomePage;
