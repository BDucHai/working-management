import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Img() {
  async function handleGallery() {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
    });
    console.log(result);
    if (!result.canceled) {
    }
  }
  return (
    <TouchableOpacity onPress={handleGallery}>
      <FontAwesome name="image" size={24} color="#3D5CFF" />
    </TouchableOpacity>
  );
}
