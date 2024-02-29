import { AntDesign } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";

interface JobDue {
    name: string;
    time: number;
}
export default function Upcomming() {
    const jobDue: JobDue[] = [
        { name: "Promgramming", time: 30 },
        {
            name: "Code front-end ",
            time: 120,
        },
        {
            name: "Code front-end ",
            time: 300,
        },
    ];
    return (
        <View className="mt-4 w-full h-[240px]">
            <Text className="font-bold text-gray-700 text-lg">Job Due</Text>
            {/* <View className="pl-4 pt-2 w-full bg-[#c3c3c3] rounded-[4px]">
                <View className="flex flex-row mb-4 gap-x-4 items-center">
                    <View className="flex flex-row items-center gap-2 mr-[40px] justify-self-start">
                        <AntDesign name="clockcircleo" size={16} color="black" />
                        <Text className="font-bold">Job Name</Text>
                    </View>
                    <View className="flex-1 justify-self-center">
                        <Text className="opacity-60 ">Due Time</Text>
                    </View>
                    <View>
                        <View className="flex-1 mr-[20px] justify-self-end">
                            <Text className="opacity-60 ">Project</Text>
                        </View>
                    </View>
                </View>
            </View> */}
            <FlatList
                className="pl-4 py-2 w-full"
                data={jobDue}
                initialNumToRender={2}
                style={{ overflow: "hidden" }}
                renderItem={({ item }) => {
                    return (
                        <View className="flex flex-row mb-4 gap-x-4 items-center">
                            <View className="flex flex-row items-center gap-2 mr-[40px] justify-self-start">
                                <AntDesign name="clockcircleo" size={16} color="black" />
                                <Text className="font-bold">{item.name}</Text>
                            </View>
                            <View className="flex-1 justify-self-center">
                                <Text className="opacity-60 ">about {item.time} minutes</Text>
                            </View>
                        </View>
                    );
                }}
            />
            <View className="flex flex-row items-center gap-1  basis-1/2 ">
                <AntDesign name="down" size={16} color="#3D5CFF" />
                <Text className="font-bold text-xs underline text-primary">Show more</Text>
            </View>
        </View>
    );
}
