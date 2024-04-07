import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Image } from "react-native";
import { Root } from "../navigation/types";
import InputFeild from "../components/input";
import axios, { AxiosError } from "axios";
import { BACKEND_URL } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { changeLogin, login, selectIsLoading } from "../redux/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { Keyboard } from "react-native";
import Toast from "react-native-toast-message";
import Loading from "../components/globalLoading";
import { connectSocket } from "../redux/socketSlice";

interface UserLogin {
  email: string;
  password: string;
}

export default function LoginPage({ navigation }: Root) {
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isLoading = useSelector(selectIsLoading);
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
  const onSubmit = async (data: UserLogin) => {
    Keyboard.dismiss();
    const { email, password } = data;
    const infor = await dispatch(login({ email, password }));
    const res = unwrapResult(infor);
    Toast.show({
      type: `${res.message ? "error" : "success"}`,
      text1: `${res.message ? res.message : "Login successfully"}`,
      visibilityTime: 2000,
    });
    if (!res.message) {
      await AsyncStorage.setItem("AccessToken", res?.accessToken);
      await AsyncStorage.setItem("RefreshToken", res?.refreshToken);
    }
    if (!res.message) {
      dispatch(changeLogin());
      // dispatch(connectSocket(res.accessToken));
      navigation.navigate("Home");
    }
  };
  if (isLoading) return <Loading />;
  return (
    <View className="flex flex-1 flex-col justify-center px-6 py-12 bg-white">
      <View className="self-center mb-5 space-y-5">
        <Image
          source={require("./../assets/img/illustration.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Text className="font-semibold text-[25px] mb-4">
        Login to your account
      </Text>
      <View>
        <InputFeild
          control={control}
          name="email"
          placeholder="johnsmith@gmail.com"
          title="Email address"
        />
        {errors.email && (
          <Text className="text-red-600 mt-2">Please provide your email</Text>
        )}
        <InputFeild
          control={control}
          name="password"
          placeholder="*****"
          title="Password"
        />
        {errors.password && (
          <Text className="text-red-600 mt-2">
            Please provide your password
          </Text>
        )}
        <View className="flex items-end px-4 mt-2">
          <Text className="text-blue-400">Forgot your password?</Text>
        </View>
        <View className="mt-6 flex items-center space-y-5">
          <TouchableOpacity
            className="w-full rounded-lg bg-primary flex justify-center items-center px-4 py-4"
            onPress={handleSubmit(onSubmit)}>
            onPress={handleSubmit(onSubmit)}>
            <Text className="text-white text-base font-semibold">Login</Text>
          </TouchableOpacity>
          <View className="flex flex-row gap-x-2">
            <Text>You don't have account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("User", { screen: "Signup" })}>
              onPress={() => navigation.navigate("User", { screen: "Signup" })}>
              <Text className="text-primary">Sign-up </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
