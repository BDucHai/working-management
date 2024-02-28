import { View, Text, TextInput } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

interface InputFieldProps {
  control: any;
  title: string;
  placeholder: string;
  name: string;
  password?: boolean;
}
const InputFeild = ({
  control,
  title,
  placeholder,
  name,
  password,
}: InputFieldProps) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <View className="mt-2">
          <Text className="block text-md font-semibold text-gray-400 mb-2 ">
            {title}
          </Text>
          <TextInput
            secureTextEntry={password}
            placeholder={placeholder}
            className="border-gray-500 border-2 px-4 py-2 rounded-lg opacity-60 focus:border-primary"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        </View>
      )}
      name={name}
    />
  );
};

export default InputFeild;
