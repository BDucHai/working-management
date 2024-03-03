import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableWithoutFeedback,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { DetailProject, MyProject } from "../types/projectTab.type";

import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LineTaskView from "../components/projects/LineTaskView";
import { useState } from "react";
import { ScrollView } from "react-native-virtualized-view";

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
    const [displayForm, setDisPlayForm] = useState("hidden");
    const [taskForm, setTaskForm] = useState({
        name: "",
        deadline: "",
        personCharge: "",
        isDone: 0,
    });

    const handleChangeTaskForm = (field: string, value: string) => {
        setTaskForm({ ...taskForm, [field]: value });
    };

    const handleDisplayForm = () => {
        if (displayForm === "hidden") {
            setDisPlayForm("block");
        } else {
            setDisPlayForm("hidden");
        }
    };
    return (
        <ScrollView className="bg-white">
            <View className="pt-[50px] pb-[15px] px-[16px] bg-primary">
                <TouchableWithoutFeedback onPress={() => navigation.navigate("Project", { screen: "List" })}>
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
                    <TouchableOpacity onPress={handleDisplayForm}>
                        <MaterialCommunityIcons name="clipboard-plus-outline" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                {/* Add task */}
                <View className={`${displayForm} px-[16px] mt-[16px]`}>
                    <View className="flex-row items-center mb-[8px]">
                        <Text className="w-[30%] text-[16px] font-semibold">Name:</Text>
                        <TextInput
                            className="border-2 border-[#000] w-[70%] px-[10px] py-[5px] rounded-[4px]"
                            multiline
                            numberOfLines={4}
                            value={taskForm.name}
                            onChangeText={(text) => handleChangeTaskForm("name", text)}
                            placeholder="Fill Name Of Task"
                        />
                    </View>
                    <View className="flex-row items-center mb-[8px]">
                        <Text className="w-[30%] text-[16px] font-semibold">Deadline:</Text>
                        <TextInput
                            className="border-2 border-[#000] w-[70%] px-[10px] py-[5px] rounded-[4px]"
                            multiline
                            numberOfLines={4}
                            value={taskForm.deadline}
                            onChangeText={(text) => handleChangeTaskForm("deadline", text)}
                            placeholder="Fill Deadline"
                        />
                    </View>
                    <View className="flex-row items-center mb-[8px]">
                        <Text className="w-[30%] text-[16px] font-semibold">personCharge:</Text>
                        <TextInput
                            className="border-2 border-[#000] w-[70%] px-[10px] py-[5px] rounded-[4px]"
                            multiline
                            numberOfLines={4}
                            value={taskForm.personCharge}
                            onChangeText={(text) => handleChangeTaskForm("personCharge", text)}
                            placeholder="Fill personCharge"
                        />
                    </View>
                </View>
                {/* List Task */}
                <SafeAreaView className="h-full mt-[16px]">
                    <FlatList
                        data={detailProject.tasks}
                        renderItem={({ item }) => {
                            return <LineTaskView item={item} />;
                        }}
                    />
                </SafeAreaView>
            </SafeAreaView>
        </ScrollView>
    );
}
