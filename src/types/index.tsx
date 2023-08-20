import { StackScreenProps } from "@react-navigation/stack";
import { Conversation } from "src/interfaces/interfaces";

export type RootStackParamList = {
    Home: undefined;
    Chat: Conversation;
  };
export type HomeScreenRouteProp=StackScreenProps<RootStackParamList,'Home'>
export type ChatScreenRouteProp=StackScreenProps<RootStackParamList,'Chat'>