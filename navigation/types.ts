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
};
export type MeetingStackParamList = {
  ListMeeting: undefined
  Chat: undefined;
  Video: undefined;
};
export type RootStackParamList = {
  Home: undefined;
  User: NavigatorScreenParams<UserStackParamList>;
  Project: NavigatorScreenParams<ProjectStackParamList>;
  Meeting: NavigatorScreenParams<MeetingStackParamList>;
};

export type Root = CompositeScreenProps<
  BottomTabScreenProps<RootStackParamList>,
  CompositeScreenProps<
    NativeStackScreenProps<UserStackParamList>,
    CompositeScreenProps<
      NativeStackScreenProps<ProjectStackParamList>,
      NativeStackScreenProps<MeetingStackParamList>
    >
  >
>;
