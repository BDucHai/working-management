// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./screens/HomePage";
import UserPage from "./screens/User";
import LoginPage from "./screens/Login";
import SignupPage from "./screens/Signup";
import ProjectPage from "./screens/ProjectPage";
import DetailProjectPage from "./screens/DetailProjectPage";
import ChatPage from "./screens/Chat";
import MeetingPage from "./screens/Meeting";
import AddProject from "./screens/AddProject";

import {
  MeetingStackParamList,
  ProjectStackParamList,
  RootStackParamList,
  UserStackParamList,
} from "./navigation/types";
import VideoCallPage from "./screens/VideoCall";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// export props to use in page
// export type Props = BottomTabScreenProps<RootStackParamList>;
// export type UserProps = NativeStackScreenProps<UserStackParamList>;

// create stack : bottom stack and native stack
const Tab = createBottomTabNavigator<RootStackParamList>();
const UserTab = createNativeStackNavigator<UserStackParamList>();
const ProjectTab = createNativeStackNavigator<ProjectStackParamList>();
const MeetingTab = createNativeStackNavigator<MeetingStackParamList>();

function User() {
  return (
    <UserTab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={true ? "Login" : "UserProfile"}
    >
      <UserTab.Screen
        name="UserProfile"
        component={UserPage}
        options={{ headerShown: false }}
      />
      <UserTab.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <UserTab.Screen
        name="Signup"
        component={SignupPage}
        options={{ headerShown: false }}
      />
    </UserTab.Navigator>
  );
}

function Project() {
  return (
    <ProjectTab.Navigator initialRouteName="List">
      <ProjectTab.Screen
        name="List"
        component={ProjectPage}
        options={{ headerShown: false }}
      />
      <ProjectTab.Screen
        name="DetailProjectPage"
        component={DetailProjectPage}
        options={{ headerShown: false }}
      />
      <ProjectTab.Screen
        name="AddProject"
        component={AddProject}
        options={{ headerShown: false }}
      />
    </ProjectTab.Navigator>
  );
}
function Meeting() {
  return (
    <MeetingTab.Navigator
      initialRouteName="ListMeeting"
      screenOptions={{ headerShown: false }}
    >
      <MeetingTab.Screen name="ListMeeting" component={MeetingPage} />
      <MeetingTab.Screen name="Chat" component={ChatPage} />
      <MeetingTab.Screen name="Video" component={VideoCallPage} />
    </MeetingTab.Navigator>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              switch (route.name) {
                case "Home":
                  return (
                    <Feather
                      name="home"
                      size={24}
                      color={focused ? "#3D5CFF" : "black"}
                    />
                  );

                case "User":
                  return (
                    <Feather
                      name="user"
                      size={24}
                      color={focused ? "#3D5CFF" : "black"}
                    />
                  );

                case "Project":
                  return (
                    <Feather
                      name="book"
                      size={24}
                      color={focused ? "#3D5CFF" : "black"}
                    />
                  );

                case "Meeting":
                  return (
                    <AntDesign
                      name="videocamera"
                      size={24}
                      color={focused ? "#3D5CFF" : "black"}
                    />
                  );

                default:
                  return;
              }
            },
            tabBarActiveTintColor: "#3D5CFF",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Project" component={Project} />
          <Tab.Screen name="Meeting" component={Meeting} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
