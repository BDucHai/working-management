import { Button, StyleSheet, Text, View } from "react-native";
import { Root } from "../navigation/types";

const UserPage = ({ navigation }: Root) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-600">User Page</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("User", { screen: "Login" })}
      />
    </View>
  );
};
export default UserPage;
