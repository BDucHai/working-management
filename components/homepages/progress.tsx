import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { User } from "../../types/user.type";

const Progress = ({ user }: { user: User | null }) => {
  const navigation = useNavigation();
  return (
    <View className="px-4 ">
      <View className="bg-white transform -translate-y-10 px-6 py-6 rounded-lg">
        <View className="mb-2 flex flex-row justify-between items-center ">
          <Text className="text-lg font-semibold text-gray-500 ">
            My project
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("User", { screen: "Todo" })}>
            <Text className="font-bold text-primary ">View All Team</Text>
          </TouchableOpacity>
        </View>
        <View className="mb-1">
          <Text className="text-gray-500">
            {user?.name ? "Completed 2/3" : "You aren't login"}
          </Text>
        </View>
        <View
          className="flex flex-row w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
          role="progressbar">
          <View
            className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-500 text-xs text-white text-center whitespace-nowrap transition duration-500 "
            style={{ width: `${user?.name ? "60%" : "0%"}` }}></View>
        </View>
      </View>
    </View>
  );
};
export default Progress;
