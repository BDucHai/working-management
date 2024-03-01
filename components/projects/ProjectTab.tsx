import React from "react";
import {
  View,
  Text,
  FlatList,
  ProgressBarAndroidBase,
  ProgressBarAndroidComponent,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MyProject } from "../../types/projectTab.type";
import * as Progress from "react-native-progress";
const ProjectTab: React.FC<{ item: MyProject; index: number }> = ({
  item,
  index,
}) => {
  const navigation = useNavigation();
  return (
    <View
      className={` ${
        index % 3 == 0
          ? "bg-[#FFE7EE]"
          : `${index % 3 == 1 ? "bg-[#BAD6FF]" : "bg-[#BAE0DB]"}`
      } w-[50%] border-[white] border-[6px] rounded-[14px] px-[12px] pt-[5px] pb-[3px] h-[210px] my-[6px]`}
    >
      <View className="flex ">
        <Text className="mt-[12px] font-extrabold text-[22px] leading-[24px] h-[50px] overflow-clip">
          {item.name}
        </Text>
        {/* {item.star == 1 ? (
                    <AntDesign className="justify-self-end flex-1 w-[25%]" name="star" size={24} color="#ffd760" />
                ) : (
                    <AntDesign name="staro" size={24} color="black" />
                )} */}
      </View>
      {/* <LinearProgress variant="determinate" value={(item.complete / item.total) * 100} /> */}
      <Text className="text-[15px] mb-[5px]">Progress:</Text>
      <Progress.Bar progress={item.progress} />
      <Text className="text-[15px] mt-[8px]">
        Member: <Text className="font-bold text-[20px]">{item.member}</Text>
      </Text>

      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("Project", { screen: "DetailProjectPage" })
        }
      >
        <View
          onPointerDown={() => navigation.navigate("Home")}
          className={`${
            index % 3 == 0
              ? "bg-[#EC7B9C]"
              : `${index % 3 == 1 ? "bg-[#3D5CFF]" : "bg-[#398A80]"}`
          } mt-[15px] py-[10px] text-white w-[80%] rounded-[12px]`}
        >
          <Text className="text-white px-[8px] text-[18px] text-center">
            Detail ▶
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ProjectTab;
