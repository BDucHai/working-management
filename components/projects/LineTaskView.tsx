import { View, Text } from "react-native";
import { Task } from "../../types/projectTab.type";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Checkbox, Switch } from "react-native-paper";
import { useState } from "react";

const LineTaskView: React.FC<{ item: Task }> = ({ item }) => {
    return (
        <View className="bg-blend-overlay border-b-2 border-[#ccc] shadow-sm shadow-cyan-500/50  w-full flex-row justify-between items-center p-[12px] mb-[10px]">
            <View className="border-2 rounded-[6px] mr-[6px]">
                <Checkbox status={item.isDone ? "checked" : "unchecked"} color="#1134A6" />
            </View>
            <View className="flex-row w-[70%] text-[16px]">
                <Text className="w-[30%] text-[20px] font-semibold">{item.name}</Text>
                <Text className="w-[35%] text-[16px] mr-[10px]">{item.personCharge}</Text>
                <Text className="w-[30%] text-[16px]  font-semibold">{item.deadline}</Text>
            </View>
            <View className="flex-row items-center">
                {/* <Switch value={item.isDone == 1 ? true : false} color="#0080FE" /> */}
                <MaterialCommunityIcons name="grease-pencil" size={24} color="black" />
            </View>
        </View>
    );
};

export default LineTaskView;
