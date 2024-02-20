import { Button, Text, View } from "react-native";

const HomePage = ({ navigation }: { navigation: any }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-500">HomePage</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("user")}
      />
    </View>
  );
};

export default HomePage;
