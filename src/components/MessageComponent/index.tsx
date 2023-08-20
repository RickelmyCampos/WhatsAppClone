import Box from '@components/Box';
import {colors} from '@styles/colors';
import {Message} from 'src/interfaces/interfaces';
import React from 'react';
import {Text, View} from 'react-native';
import { fonts } from '@styles/fonts';
interface MessageProps {
  item: Message;
  chatUserName: string
}
const MessageComponent = ({item,chatUserName}: MessageProps) => {
  console.log(chatUserName==item.user)
  const isChatUserName=chatUserName===item.user
  return (
    <Box alignItems={isChatUserName?"flex-start":"flex-end"} padding={10}>
      <Box
        padding={8}
        borderRadius={10}
        bg={isChatUserName?colors.dark6:colors.tealGreenDark}
        style={{
          maxWidth: '80%',
        }}>
        <Text style={[fonts.fontNormal,{color: colors.white}]}>{item.message}</Text>
      </Box>
    </Box>
  );
};
export default MessageComponent;
