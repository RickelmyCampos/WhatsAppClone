import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {Box, ButtonWithIcons, ModalComponent} from '@components/index';
import {Conversation} from '@interfaces/interfaces';
import {fonts} from '@styles/fonts';
import {ThemeState} from '@redux/features/themeSlice';
import MaterialCommunitIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '@styles/colors';
interface ModalProfileProps {
  data: Conversation;
  theme: ThemeState;
}
const ICON_SIZE = 24;
const size = Dimensions.get('window').width * 0.6;
const ModalProfile: React.FC<ModalProfileProps> = ({data, theme}) => {
  return (
    <Box bg={theme.colors.background}>
      <Box
        bg={'rgba(0,0,0,0.2)'}
        w={'100%'}
        padding={8}
        style={{position: 'absolute', zIndex: 2}}>
        <Text style={fonts.fontNormal}>{data.name}</Text>
      </Box>
      <Image
        source={{uri: data.profilePicture}}
        style={{width: size, height: size}}
      />
      <Box direction="row" justifyContent="space-around">
        <ButtonWithIcons icon="android-messages" color={colors.tealGreen} />
        <ButtonWithIcons icon="phone" color={colors.tealGreen} />
        <ButtonWithIcons icon="video" color={colors.tealGreen} />
        <ButtonWithIcons icon="information-outline" color={colors.tealGreen} />
      </Box>
    </Box>
  );
};

export default ModalProfile;
