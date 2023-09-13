import {Pressable, StyleSheet, Text, Dimensions, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Box, ButtonWithIcons, ModalComponent} from '@components/index';
import {ThemeState} from '@redux/features/themeSlice';
import {Conversation} from 'src/interfaces/interfaces';
import {Avatar} from '@rneui/themed';
import MaterialCommunitIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts} from '@styles/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@types';
import {tapGestureHandlerProps} from 'react-native-gesture-handler/lib/typescript/handlers/TapGestureHandler';
interface ChatHeaderProps {
  theme: ThemeState;
  chat: Conversation;
  navigation: StackNavigationProp<RootStackParamList, 'Chat', undefined>;
}
const DEFAULT_METRIC = 45;
const ICON_SIZE = 24;
const windowWidth = Dimensions.get('window').width;

const ChatHeader: React.FC<ChatHeaderProps> = ({theme, chat, navigation}) => {
  const ButtonPopUp = ({...props}) => {
    return (
      <Pressable android_ripple={{color: 'rgba(255, 255, 255,0.5)'}} style={{padding: 16, flex:1,height:50,justifyContent:'center'}}>
        <Text style={[fonts.fontSmall,{color:theme.colors.text}]}>{props.title}</Text>
      </Pressable>
    );
  };
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalTop, setModalTop] = useState(0);

  const refHeader = useRef<View>(null);
  const OpenModal = () => {
    if (refHeader.current) {
      refHeader.current.measure(
        (
          _fx: number,
          _fy: number,
          _w: number,
          h: number,
          _px: number,
          py: number,
        ) => {
          setModalTop(29 + py + h);
          setModalIsOpen(true);
        },
      );
    }
  };

  const CloseModal = () => {
    setModalIsOpen(false);
  };
  return (
    <Box
      refBox={refHeader}
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
        <ButtonWithIcons
          onPress={OpenModal}
          icon="dots-vertical"
          color={colors.white}
        />
      </Box>
      <ModalComponent
        handleClose={CloseModal}
        styleContent={{position: 'absolute', top: modalTop, right: 5}}
        visible={modalIsOpen}
        modalContent={() => (
          <Box bg={theme.colors.header} borderRadius={10}   style={{minWidth:190,paddingVertical:10}}>
            <ButtonPopUp title={'Dados do grupo'} />
            <ButtonPopUp title={'Midia do grupo'} />
            <ButtonPopUp title={'Pesquisar'} />
            <ButtonPopUp title={'Silenciar notificações'} />
            <ButtonPopUp title={'Mensagens temporárias'} />
            <ButtonPopUp title={'Papel de parede'} />
            <ButtonPopUp title={'Mais'} />
          </Box>
        )}
      />
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
    paddingHorizontal: 4,
    width: windowWidth - 4 - 4 - 24 - 4 * DEFAULT_METRIC,
  },
});
