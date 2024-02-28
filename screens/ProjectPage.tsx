import { View, Text, FlatList, TextInput } from "react-native";
import { LinearProgress } from "@mui/material";
import { useNavigation } from "@react-navigation/native";
import ProjectTab from "../components/projects/ProjectTab";
import { MyProject } from "../types/projectTab.type";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const myProject: MyProject[] = [
    {
        name: "Create Web App",
        member: 12,
    },
    {
        name: "Create Banking app",
        member: 5,
    },
    {
        name: "Create Heath Take Care",
        member: 16,
    },
    {
        name: "Create Bakery",
        member: 5,
    },
];
export default function ProjectPage() {
    const navigation = useNavigation();
    const [find, onChangeFind] = useState("");
    return (
        <View className="bg-white">
            <Text className="mt-[70px] text-center font-bold text-[26px]">My Projects</Text>
            <View className="mt-[20px] px-[20px] flex-row justify-end">
                <MaterialCommunityIcons name="clipboard-plus-outline" size={40} color="black" />
            </View>
            <SafeAreaView className="flex flex-row justify-between px-[12px] w-full mt-[-30px]">
                <TextInput
                    className="border-2 rounded-[6px] w-[75%] px-[8px] py-[6px] "
                    onChangeText={onChangeFind}
                    value={find}
                    placeholder="name project"
                />
                <View className="ml-[10px] py-[10px] w-[20%] rounded-[6px] bg-[#3D5CFF]">
                    <Text className="justify-self-end text-center font-semibold text-white">Search</Text>
                </View>
            </SafeAreaView>
            <View className="h-full px-[12px] mt-[-10px]">
                <FlatList
                    data={myProject}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return <ProjectTab item={item} index={index} />;
                    }}
                />
            </View>
        </View>
    );
}
