import { Image, Text, View } from "react-native";
import Progress from "./progress";
import { User } from "../../types/user.type";

const Header = ({ user }: { user: User }) => {
  return (
    <>
      <View className="h-1/4 bg-primary flex justify-center items-center">
        <View className="flex flex-row  gap-32">
          <View className="space-y-2">
            <Text className="text-2xl text-white font-bold  ">
              Hi, {user.name || "Guest"}
            </Text>
            <Text className="text-white font-light">Let's start working</Text>
          </View>
          <View>
            <Image
              source={require("./../../assets/img/Avatar.png")}
              width={50}
              height={50}
            />
          </View>
        </View>
      </View>
      <Progress user={user} />
    </>
  );
};
export default Header;
