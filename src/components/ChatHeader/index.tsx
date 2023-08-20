import {Pressable, StyleSheet, Text, Dimensions} from 'react-native';
import React from 'react';
import {Box, ButtonWithIcons} from '@components/index';
import {ThemeState} from '@redux/features/themeSlice';
import {Conversation} from 'src/interfaces/interfaces';
import {Avatar} from '@rneui/themed';
import MaterialCommunitIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts} from '@styles/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@types';
interface ChatHeaderProps {
  theme: ThemeState;
  chat: Conversation;
  navigation: StackNavigationProp<RootStackParamList, 'Chat', undefined>;
}
const DEFAULT_METRIC = 45;
const ICON_SIZE = 24;
const windowWidth = Dimensions.get('window').width;
const ChatHeader: React.FC<ChatHeaderProps> = ({theme, chat, navigation}) => {
  return (
    <Box
      h={60}
      bg={theme.colors.header}
      direction="row"
      alignItems="center"
      //padding={4}
      justifyContent="space-between"
      gap={4}>
      <Box borderRadius={20} bg={theme.colors.header} padding={4}>
        <Pressable
          style={styles.buttonBack}
          android_ripple={{color: 'rgba(255, 255, 255,0.5)', borderless: true}}
          onPress={() => navigation.goBack()}>
          <MaterialCommunitIcons
            name="arrow-left"
            size={24}
            color={colors.white}
          />
          <Avatar rounded source={{uri: chat.profilePicture}} />
        </Pressable>
      </Box>
      <Pressable android_ripple={{color: 'rgba(255, 255, 255,0.5)'}}>
        <Box style={styles.headerNameButton} h={'100%'} justifyContent="center">
          <Text style={[fonts.fontHeader, {color: colors.white}]}>
            {chat.name}
          </Text>
          <Text style={[fonts.fontSmall, {color: colors.white}]}>
            {chat.name}
          </Text>
        </Box>
      </Pressable>
      <Box direction="row">
        <ButtonWithIcons icon="video" color={colors.white} />
        <ButtonWithIcons icon="phone" color={colors.white} />
        <ButtonWithIcons icon="dots-vertical" color={colors.white} />
      </Box>
    </Box>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  buttonBack: {
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 10,
  },

  headerNameButton: {
    paddingHorizontal:4,
    width: windowWidth - 4 - 4 - 24 - 4 * DEFAULT_METRIC,
  },
});
