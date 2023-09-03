import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {Box, ModalComponent} from '@components/index';
import {Conversation} from '@interfaces/interfaces';
import {fonts} from '@styles/fonts';
import {ThemeState} from '@redux/features/themeSlice';
interface ModalProfileProps {
  data: Conversation;
  theme: ThemeState;
}
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
      <Box padding={25}></Box>
    </Box>
  );
};

export default ModalProfile;
