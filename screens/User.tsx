import { Button, StyleSheet, Text, View } from "react-native";
import { Root } from "../navigation/types";
import UserHeader from "../components/userProfile/userHeader";
import UserInfor from "../components/userProfile/userInfor";

const UserPage = ({ navigation }: Root) => {
  return (
    <View className="flex-1 bg-slate-300 ">
      <UserHeader />
      <UserInfor />
    </View>
  );
};
export default UserPage;
