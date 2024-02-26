import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type UserStackParamList = {
    Todo: undefined;
    Login: undefined;
  };
  
  export type RootStackParamList = {
    Home: undefined;
    User: NavigatorScreenParams<UserStackParamList>;
  };

  export type Root = CompositeScreenProps<
  BottomTabScreenProps<RootStackParamList>,
  NativeStackScreenProps<UserStackParamList>
>;