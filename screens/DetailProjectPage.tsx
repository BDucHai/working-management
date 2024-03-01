import { View, Text, FlatList, TextInput, ScrollView, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { DetailProject, MyProject } from "../types/projectTab.type";

import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LineTaskView from "../components/projects/LineTaskView";

const detailProject: DetailProject = {
    name: "Create Web App",
    member: "p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12",
    tasks: [
        {
            name: "FE",
            deadline: "15-03-2024",
            personCharge: "p1,p2,p3,p12",
            isDone: 1,
        },
        {
            name: "BE",
            deadline: "15-03-2024",
            personCharge: "p3,p4,p5",
            isDone: 1,
        },
        {
            name: "QA",
            deadline: "30-03-2024",
            personCharge: "p6,p7,p8",
            isDone: 0,
        },
        {
            name: "Test",
            deadline: "01-04-2024",
            personCharge: "p9,p10,p11",
            isDone: 0,
        },
    ],
};
export default function DetailProjectPage() {
    const navigation = useNavigation();
    return (
        <View className="bg-white">
            <View className="pt-[50px] pb-[15px] px-[16px] bg-primary">
                <TouchableWithoutFeedback onPress={() => navigation.navigate("List")}>
                    <Ionicons className="ml-[20px]" name="arrow-back" size={24} color="white" />
                </TouchableWithoutFeedback>
                <Text className="text-center font-bold text-[26px] text-white">{detailProject.name}</Text>
            </View>
            <SafeAreaView className=" bg-white">
                <View className="flex-row justify-between items-center mt-[28px] mx-[30px] border-b-[1px] border-[#15803d] pb-[8px] ">
                    <View className="flex-row items-center">
                        <Text className="mr-[5px] font-bold text-[22px] italic text-[#1F51FF]">Task</Text>
                        <FontAwesome5 name="tasks" size={24} color="#1F51FF" />
                    </View>
                    <View>
                        <MaterialCommunityIcons name="clipboard-plus-outline" size={30} color="black" />
                    </View>
                </View>
                <SafeAreaView className="h-full mt-[30px]">
                    <FlatList
                        data={detailProject.tasks}
                        renderItem={({ item }) => {
                            return <LineTaskView item={item} />;
                        }}
                    />
                </SafeAreaView>
            </SafeAreaView>
        </View>
    );
}
