import { Image, Text, View } from "react-native";

const Meeting = () => {
  return (
    <View className="bg-[#EFE0FF] basis-1/6 flex flex-row rounded-md item justify-center items-center">
      <View className="">
        <Text className="font-bold text-2xl text-secondary">Meeting</Text>
        <Text className="text-secondary font-bold">
          Come to play with co-worker
        </Text>
      </View>
      <View className="">
        <Image
          source={require("./../../assets/img/meetup.png")}
          width={50}
          height={50}
        />
      </View>
    </View>
  );
};
export default Meeting;
