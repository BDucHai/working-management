import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type UserStackParamList = {
    Todo: undefined;
    Login: undefined;
    UserProfile: undefined;
  };
  export type ProjectStackParamList = {
    List: undefined;
    DetailProjectPage: undefined;
};
  export type RootStackParamList = {
    Home: undefined;
    User: NavigatorScreenParams<UserStackParamList>;
    Project: NavigatorScreenParams<ProjectStackParamList>;
    DetailProjectPage: NavigatorScreenParams<ProjectStackParamList>;
};


  export type Root = CompositeScreenProps<
  BottomTabScreenProps<RootStackParamList>,
  CompositeScreenProps<NativeStackScreenProps<UserStackParamList>, NativeStackScreenProps<ProjectStackParamList>
>;
