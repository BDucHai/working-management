// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import { Entypo, Feather } from "@expo/vector-icons";
import HomePage from "./screens/HomePage";
import UserPage from "./screens/User";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginPage from "./screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, UserStackParamList } from "./navigation/types";

// export props to use in page
// export type Props = BottomTabScreenProps<RootStackParamList>;
// export type UserProps = NativeStackScreenProps<UserStackParamList>;

// create stack : bottom stack and native stack
const Tab = createBottomTabNavigator<RootStackParamList>();
const UserTab = createNativeStackNavigator<UserStackParamList>();

function User() {
  return (
    <UserTab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Todo"
    >
      <UserTab.Screen
        name="Todo"
        component={UserPage}
        options={{ headerShown: false }}
      />
      <UserTab.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
    </UserTab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case "Home":
                return focused ? (
                  <Entypo name="home" size={24} color="#3D5CFF" />
                ) : (
                  <Feather name="home" size={24} color="black" />
                );
              case "User":
                return focused ? (
                  <Entypo name="user" size={24} color="#3D5CFF" />
                ) : (
                  <Feather name="user" size={24} color="black" />
                );
              default:
                return;
            }
          },
          tabBarActiveTintColor: "#3D5CFF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
