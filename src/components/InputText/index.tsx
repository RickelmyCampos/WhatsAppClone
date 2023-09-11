import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunitIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from '@components/Box';
import {colors} from '@styles/colors';
import {Message} from 'src/interfaces/interfaces';
import {ButtonWithIcons} from '@components/index';
import {fonts} from '@styles/fonts';
const DEFAULT_METRIC = 45;
const ICON_SIZE = 24;
const windowWidth = Dimensions.get('window').width;
interface InputTextProps {
  send: (message: Message) => void;
}
const InputText: React.FC<InputTextProps> = ({send}) => {
  const [text, setText] = useState('');
  const textIsEmpy = text.length == 0;
  return (
    <KeyboardAvoidingView>
    <Box
      direction="row"
      padding={6}
      w={'100%'}
      justifyContent="space-between"
      alignItems="flex-end">
      <Box
        bg={colors.dark6}
        direction="row"
        borderRadius={20}
        justifyContent="space-between"
        alignItems="flex-end"
        w={windowWidth - 6 - 6 - 4 - DEFAULT_METRIC}>
        <Box direction="row" alignItems="flex-end">
          <ButtonWithIcons icon="emoticon" color={colors.dark3} />
          <TextInput
            placeholder="Mensagem"
            multiline
            placeholderTextColor={colors.dark3}
            defaultValue={text}
            onChangeText={setText}
            style={[
              fonts.fontNormal,
              styles.TextInputDefault,
              {
                width: textIsEmpy
                  ? windowWidth - 6 - 6 - 4 - 5 * DEFAULT_METRIC
                  : windowWidth - 6 - 6 - 4 - 3 * DEFAULT_METRIC,
              },
            ]}
          />
        </Box>
        <Box direction="row">
          <ButtonWithIcons icon="paperclip" color={colors.dark3} />

          {textIsEmpy && (
            <ButtonWithIcons icon="bitcoin" color={colors.dark3} />
          )}
          {textIsEmpy && <ButtonWithIcons icon="camera" color={colors.dark3} />}
        </Box>
      </Box>
      <Box
        bg={colors.tealGreenDark3}
        w={DEFAULT_METRIC}
        h={DEFAULT_METRIC}
        borderRadius={50}
        justifyContent="center"
        alignItems="center">
        <Pressable
          onPress={() => {
            setText('');
            send({message: text, previewDate: new Date().toISOString(), sendDate: new Date().toISOString(), user: 'User' ,receivableDate:new Date().toISOString()});
          }}>
          <MaterialCommunitIcon
            name={textIsEmpy ? 'microphone' : 'send'}
            color={colors.white}
            size={ICON_SIZE}
          />
        </Pressable>
      </Box>
    </Box>
    </KeyboardAvoidingView>
  );
};

export default InputText;

const styles = StyleSheet.create({
  TextInputDefault: {
    minHeight: DEFAULT_METRIC,
    padding: 2,
    maxHeight: 100,
    color: colors.white,
  },
});
