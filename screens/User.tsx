import { Button, Text, View } from "react-native";

const UserPage = ({ navigation }: { navigation: any }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>User Page</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("home")}
      />
    </View>
  );
};
export default UserPage;
