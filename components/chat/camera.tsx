import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
export default function Camera() {
  async function handleCamera() {
    await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      cameraType: ImagePicker.CameraType.front,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      saveImage(result.assets[0].uri);
    }
  }
  async function saveImage(image: string) {
    console.log(image);
  }
  return (
    <TouchableOpacity className="px-2" onPress={handleCamera}>
      <Entypo name="camera" size={24} color="#3D5CFF" />
    </TouchableOpacity>
  );
}
