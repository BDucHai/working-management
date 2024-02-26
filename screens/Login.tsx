import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Image } from "react-native";
import { Root } from "../navigation/types";
import { useNavigation } from "@react-navigation/native";

interface Data {
  email: string;
  password: string;
}

export default function LoginPage({ navigation }: Root) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: Data) => {
    console.log(data);
    navigation.navigate("Home");
  };

  return (
    <View className="flex flex-1 flex-col justify-center px-6 py-12 bg-white">
      <View className="self-center mb-5 space-y-5">
        <Image
          source={require("./../assets/img/illustration.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Text className="font-semibold text-[25px] mb-4">
        Sign-in to your account
      </Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="block text-md font-semibold text-gray-400 mb-2 ">
                Your Email
              </Text>
              <TextInput
                placeholder="jane@gmaill.com"
                className="border-gray-500 border-2 px-4 py-2 rounded-lg opacity-60 focus:border-primary"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="email"
        />
        {errors.email && (
          <Text className="text-red-600 mt-2">Please provide your email</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="mt-4">
              <Text className="block text-md font-semibold text-gray-400 mb-2 ">
                Password
              </Text>
              <TextInput
                secureTextEntry={true}
                placeholder="*****"
                className="border-gray-500 border-2 px-4 py-2 rounded-lg opacity-60 focus:border-primary"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="password"
        />
        {errors.password && (
          <Text className="text-red-600 mt-2">
            Please provide your password
          </Text>
        )}
        <View className="mt-6 flex items-center ">
          <TouchableOpacity
            className="w-1/4 rounded-lg bg-primary flex justify-center items-center px-4 py-4"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white text-base font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
