import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    Chat: undefined;
  };
export type HomeScreenRouteProp=StackScreenProps<RootStackParamList,'Home'>
export type ChatScreenRouteProp=StackScreenProps<RootStackParamList,'Chat'>