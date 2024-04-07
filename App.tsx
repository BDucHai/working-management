// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

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
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./redux/authSlice";
import { AppDispatch, RootState } from "./redux/store";
import { connectSocket, disConnectSocket } from "./redux/socketSlice";

// export props to use in page
// export type Props = BottomTabScreenProps<RootStackParamList>;
// export type UserProps = NativeStackScreenProps<UserStackParamList>;

// create stack : bottom stack and native stack
const Tab = createBottomTabNavigator<RootStackParamList>();
const UserTab = createNativeStackNavigator<UserStackParamList>();
const ProjectTab = createNativeStackNavigator<ProjectStackParamList>();
const MeetingTab = createNativeStackNavigator<MeetingStackParamList>();

function User() {
  const user = useSelector(selectCurrentUser);
  return (
    <UserTab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={user ? "UserProfile" : "Login"}>
      {user ? (
        <UserTab.Screen
          name="UserProfile"
          component={UserPage}
          options={{ headerShown: false }}
        />
      ) : (
        <>
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
        </>
      )}
      initialRouteName={user ? "UserProfile" : "Login"}>
      {user ? (
        <UserTab.Screen
          name="UserProfile"
          component={UserPage}
          options={{ headerShown: false }}
        />
      ) : (
        <>
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
        </>
      )}
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
      screenOptions={{ headerShown: false }}>
      <MeetingTab.Screen name="ListMeeting" component={MeetingPage} />
      <MeetingTab.Screen name="Chat" component={ChatPage} />
      <MeetingTab.Screen name="Video" component={VideoCallPage} />
    </MeetingTab.Navigator>
  );
}
export default function App() {
  const dispatch: AppDispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  useEffect(() => {
    const boostrapAsync = async () => {
      try {
        const accessToken = (await AsyncStorage.getItem("AccessToken")) || "";
        if (isLogin) dispatch(connectSocket(accessToken));
      } catch {}
    };
    boostrapAsync();
    return () => {
      dispatch(disConnectSocket());
    };
  }, [isLogin]);
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  return (
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
        })}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Project" component={Project} />
        {isLogin && <Tab.Screen name="Meeting" component={Meeting} />}
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
