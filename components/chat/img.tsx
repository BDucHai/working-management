import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { requestSocket } from "../../redux/socketSlice";
import { AppDispatch } from "../../redux/store";

export default function Img({
  roomId,
  userId,
}: {
  roomId: number | undefined;
  userId: number | undefined;
}) {
  const dispatch: AppDispatch = useDispatch();
  async function handleGallery() {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
      base64: true,
    });
    if (result.canceled) return;

    // data format base64
    const { base64, mimeType } = result.assets[0];
    console.log(mimeType);
    await dispatch(
      requestSocket({
        event: "createMessage",
        data: { message: base64, userId, roomId, mimeType },
      })
    );
    console.log("done");
  }
  return (
    <TouchableOpacity onPress={handleGallery}>
      <FontAwesome name="image" size={24} color="#3D5CFF" />
    </TouchableOpacity>
  );
}
