import Box from '@components/Box';
import {colors} from '@styles/colors';
import {Message} from 'src/interfaces/interfaces';
import React from 'react';
import {Text, View} from 'react-native';
import {fonts} from '@styles/fonts';
import {hourFormated} from '@utils/date';
interface MessageProps {
  item: Message;
  chatUserName: string;
}
const MessageComponent = ({item, chatUserName}: MessageProps) => {
  //console.log(chatUserName == item.user);
  const isChatUserName = chatUserName === item.user;
  return (
    <Box alignItems={isChatUserName ? 'flex-start' : 'flex-end'} padding={10}>
      <Box
        padding={8}
        borderRadius={10}
        bg={isChatUserName ? colors.dark6 : colors.tealGreenDark}
        direction="row"
        style={{
          maxWidth: '80%',
          flexWrap: 'wrap',
        }}>
        <Text style={[fonts.fontNormal, {color: colors.white}]}>
          {item.message}
        </Text>
        <Text
          style={[
            fonts.fontNormal,
            {
              position: 'absolute',
              right: 8,
              bottom: 8,
              fontSize: 12,
              textAlign: 'right',
            },
          ]}>
          {hourFormated(new Date(item.sendDate))}
        </Text>
        <Text
          style={[
            fonts.fontNormal,
            {fontSize: 12, height: 0, textAlign: 'right',marginLeft:5},
          ]}>
          {hourFormated(new Date(item.sendDate))}
        </Text>
      </Box>
    </Box>
  );
};
export default MessageComponent;
