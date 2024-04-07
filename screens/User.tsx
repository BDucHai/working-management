import { View } from "react-native";
import { Root } from "../navigation/types";
import UserHeader from "../components/userProfile/userHeader";
import UserInfor from "../components/userProfile/userInfor";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/authSlice";

const UserPage = ({ navigation }: Root) => {
  const user = useSelector(selectCurrentUser);
  return (
    <View className="flex-1 bg-slate-300 ">
      <UserHeader user={user} />
      <UserInfor user={user} />
    </View>
  );
};
export default UserPage;
