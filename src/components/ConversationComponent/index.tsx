import {Pressable, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import Box from '../Box';
import {Avatar} from '@rneui/themed';
import {Conversation} from 'src/interfaces/interfaces';
import {colors} from '@styles/colors';

interface Props {
  item: Conversation;
  navigate: () => {} | void;
}
const ConversationComponent: React.FC<Props> = ({item, navigate}) => {
  const [alterBgImage, setAlterBgImage] = useState(false);
  return (
    <Pressable
    android_ripple={{color:'rgba(255, 255, 255,0.5)'}}
      onPress={navigate}
      >
      <Box
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        padding={5}>
        <Box direction="row" gap={8} alignItems="center">
          <Avatar
            avatarStyle={{
              backgroundColor: alterBgImage
                ? 'rgba(255,255,255,0.5)'
                : undefined,
            }}
            onPress={() => {}}
            onPressIn={() => setAlterBgImage(true)}
            onPressOut={() => setAlterBgImage(false)}
            source={{uri: item.profilePicture}}
            rounded
          />
          <Box>
            <Text style={styles.textNames}>{item.name}</Text>
            <Text style={styles.textMessages}>{item.messages[0].message}</Text>
          </Box>
        </Box>
        <Box>
          <Text style={styles.textMessages}>
            {item.messages[0].sendDate.toDateString()}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};

export default ConversationComponent;

const styles = StyleSheet.create({
  textNames: {
    color: colors.white,
    fontWeight: 'normal',
    fontSize: 16,
  },
  textMessages: {
    color: colors.grey,
    fontWeight: 'normal',
    fontSize: 12,
  },
});
