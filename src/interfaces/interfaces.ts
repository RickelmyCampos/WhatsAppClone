export interface Conversation {
  name: string;
  alias: string;
  status: string;
  number: string;
  messages: Message[];
  profilePicture: string;
}
export interface Message {
  user: string;
  message:string;
  sendDate:string;
  previewDate:string
}
