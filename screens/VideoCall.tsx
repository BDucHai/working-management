import { ScrollView, Text, View } from "react-native";
import HeaderVideoCall from "../components/videocall/headerVideoCall";
import UserCall from "../components/videocall/userCall";
import FootVideoCall from "../components/videocall/footVideoCall";
import {
  StreamVideo,
  StreamVideoClient,
  name,
} from "@stream-io/video-react-native-sdk";

import VideoCall from "../components/videocall/callVideo";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectToken } from "../redux/authSlice";
import { useEffect, useState } from "react";

// const apiKey = "38u9h7vhrnyy";
const apiKey = "mmhfdzb5evj2";
export default function VideoCallPage() {
  // const token = useSelector(selectToken).accessToken;
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiWW9kYSIsImlzcyI6Imh0dHBzOi8vcHJvbnRvLmdldHN0cmVhbS5pbyIsInN1YiI6InVzZXIvWW9kYSIsImlhdCI6MTcxMzIwMTU4MCwiZXhwIjoxNzEzODA2Mzg1fQ.WkjVrYfOupnFqj5aPJdOU-fh-fHpqjcFn2S6mZLcKQU";
  const currentUser = useSelector(selectCurrentUser);
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  useEffect(() => {
    function connectSdk() {
      if (!currentUser || !token) return;
      const { id, name, image } = currentUser;

      // const user = {
      //   id: id + "", // id must string
      //   name,
      //   image: `https://getstream.io/random_png/?id=${id}&name=${name
      //     ?.split()
      //     .join("+")}`,
      // };
      const user = {
        id: "Yoda",
        name,
        image: `https://getstream.io/random_png/?id=Yoda&name=${
          name ? name.split(" ").join("+") : "John"
        }`,
      };

      const client = new StreamVideoClient({ apiKey, user, token });
      setClient(client);
    }
    connectSdk();
  }, []);
  if (!client) return;
  return (
    <StreamVideo client={client}>
      <VideoCall />
    </StreamVideo>
  );
}
