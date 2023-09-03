import {Pressable, StyleSheet, Text, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Box from '../Box';
import {Avatar} from '@rneui/themed';
import {Conversation} from 'src/interfaces/interfaces';
import {colors} from '@styles/colors';
import {fonts} from '@styles/fonts';
import {dateFormated, getConversationDateOrHour} from '@utils/date';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  item: Conversation;
  navigate: () => {} | void;
}
const getIconMessageStatus = () => {
  const icon: 'check' | 'check-all' = 'check';
  return <MaterialCommunityIcon name={icon} />;
};
const windowWidth = Dimensions.get('window').width;
const ConversationComponent: React.FC<Props> = ({item, navigate}) => {
  const [alterBgImage, setAlterBgImage] = useState(false);
  return (
    <Pressable
      style={{width: windowWidth}}
      android_ripple={{color: 'rgba(255, 255, 255,0.5)'}}
      onPress={navigate}>
      <Box
        w={windowWidth}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        h={80}>
        <Box flex={1} direction="row" alignItems="center" padding={12}>
          <Avatar
            size={50}
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
          <Box flex={1} padding={10}>
            <Box
              direction="row"
              justifyContent="space-between"
              alignItems="center">
              <Text style={[fonts.fontNormal, styles.textNames]}>
                {item.name}
              </Text>
              <Text style={[fonts.fontTiny, styles.textMessages]}>
                {getConversationDateOrHour(new Date(item.messages[0].sendDate))}
              </Text>
            </Box>
            <Box direction="row" alignItems="center" gap={4}>
              {getIconMessageStatus()}
              <Text
                numberOfLines={1}
                lineBreakMode="tail"
                style={[fonts.fontTiny, styles.textMessages]}>
                {item.messages[0].message}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default ConversationComponent;

const styles = StyleSheet.create({
  textNames: {
    color: colors.white,
  },
  textMessages: {
    color: colors.grey,
  },
});
