import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Root } from "../navigation/types";
import InputFeild from "../components/input";

interface Data {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  role: string;
}
export default function SignupPage({ navigation }: Root) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      birth: "",
      passwordConfirm: "",
      role: "guest",
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
          source={require("./../assets/img/signup.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Text className="font-semibold text-[25px] mb-4">
        Sign-up your account
      </Text>
      <View>
        <View className="flex flex-row space-x-2">
          <View className="flex-1">
            <InputFeild
              control={control}
              name="name"
              placeholder="John Smith"
              title="Your name"
            />
            {errors.name && (
              <Text className="text-red-600 mt-2">
                Please provide your name
              </Text>
            )}
          </View>
          <View className="flex-1">
            <InputFeild
              control={control}
              name="birth"
              placeholder="dd/mm/yyyy"
              title="Date of Birth"
            />
            {errors.birth && (
              <Text className="text-red-600 mt-2">
                Please provide your infor
              </Text>
            )}
          </View>
        </View>

        <View>
          <InputFeild
            control={control}
            name="email"
            placeholder="johnsmith@gmail.com"
            title="Email Address"
          />
          {errors.email && (
            <Text className="text-red-600 mt-2">Please provide your email</Text>
          )}
        </View>
        <View className="flex flex-row gap-x-2">
          <View className="flex-1">
            <InputFeild
              control={control}
              name="password"
              placeholder="*****"
              title="Password"
              password={true}
            />
            {errors.password && (
              <Text className="text-red-600 mt-2">
                Please provide your password
              </Text>
            )}
          </View>
          <View className="flex-1">
            <Controller
              control={control}
              rules={{
                required: true,
                validate: (value: string) => {
                  if (watch("password") != value) {
                    return "Password and Password Confirm is not same";
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View className="mt-2">
                  <Text className="block text-md font-semibold text-gray-400 mb-2 ">
                    Password Confirm
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
              name="passwordConfirm"
            />
            {errors.passwordConfirm?.type === "required" && (
              <Text className="text-red-600 mt-2">
                Please provide your password confirm
              </Text>
            )}
          </View>
        </View>
        {errors.passwordConfirm?.type === "validate" && (
          <Text className="text-red-600 mt-2">
            {errors.passwordConfirm.message}
          </Text>
        )}
        <View className="mt-6 flex items-center space-y-5 ">
          <TouchableOpacity
            className="w-full rounded-lg bg-primary flex justify-center items-center px-4 py-4"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white text-base font-semibold">Sign-up</Text>
          </TouchableOpacity>
          <View className="flex flex-row gap-x-2">
            <Text>You already have account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("User", { screen: "Login" })}
            >
              <Text className="text-primary">Login now </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
