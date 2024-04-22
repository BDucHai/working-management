import { Image, Text, View } from "react-native";
import Progress from "./progress";
import { User } from "../../types/user.type";

const Header = ({ user }: { user: User | null }) => {
  return (
    <>
      <View className="h-1/4 bg-primary flex justify-center  ">
        <View className="flex-row items-center justify-between px-10">
          <View className="space-y-2">
            <Text className="text-2xl text-white font-bold  ">
              Hi, {user?.name || "Guest"}
            </Text>
            <Text className="text-white font-light">Let's start working</Text>
          </View>
          <View>
            {user?.name && (
              <View className="justify-center">
                <Image
                  source={require("./../../assets/img/default.jpg")}
                  className="w-[50px] h-[50px] rounded-full object-top"
                />
              </View>
            )}
          </View>
        </View>
      </View>
      <Progress user={user} />
    </>
  );
};
export default Header;
