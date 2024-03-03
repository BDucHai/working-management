import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native-virtualized-view";

export default function AddProject() {
    const [text, setText] = React.useState("");
    return (
        <View className="bg-primary">
            <View className="pt-[80px] pb-[24px] px-[50px] ">
                <Text className="font-bold text-[26px] text-white mb-[10px]">Add New Project</Text>
                <Text className="text-white">Let's be productive!</Text>
            </View>

            {/* Form  */}
            <View className="pt-[50px] rounded-[40px] bg-white min-h-[80vh]">
                <View className="flex-row justify-center ">
                    <TextInput
                        multiline
                        numberOfLines={4}
                        label=""
                        className="w-[80%] rounded-[8px]"
                        mode="outlined"
                        activeOutlineColor="#0099FF"
                    />
                </View>
                <Text className="mt-[20px] text-[16px] font-bold px-[40px]">Add Members</Text>
                <View className="flex-row justify-center ">
                    <TextInput
                        multiline
                        numberOfLines={4}
                        label="Name"
                        className="w-[80%] rounded-[8px]"
                        mode="outlined"
                        activeOutlineColor="#0099FF"
                    />
                </View>
                <View className="flex-row justify-center ">
                    <TextInput
                        multiline
                        numberOfLines={4}
                        label="Name"
                        className="w-[80%] rounded-[8px]"
                        mode="outlined"
                        activeOutlineColor="#0099FF"
                    />
                </View>
                <View className="flex-row justify-center ">
                    <TextInput
                        multiline
                        numberOfLines={4}
                        label="Name"
                        className="w-[80%] rounded-[8px]"
                        mode="outlined"
                        activeOutlineColor="#0099FF"
                    />
                </View>
            </View>
        </View>
    );
}
