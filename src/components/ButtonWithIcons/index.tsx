import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {Box} from '@components/index';
import MaterialCommunitIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import { colors } from '@styles/colors'
const DEFAULT_METRIC = 45;
interface ButtonWithIconsProps {
  icon:
    | 'video'
    | 'phone'
    | 'dots-vertical'
    | 'emoticon'
    | 'paperclip'
    | 'bitcoin'
    | 'camera'
    | 'information-outline'
    | 'android-messages'
    | 'message';
  color: string;
  onPress?: () => {} | void;
}
const ButtonWithIcons: React.FC<ButtonWithIconsProps> = ({
  icon,
  color,
  onPress,
}) => {
  return (
    <Box style={styles.button}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: 'rgba(255, 255, 255,0.5)', borderless: true}}>
        <MaterialCommunitIcons name={icon} size={24} color={color} />
      </Pressable>
    </Box>
  );
};

export default ButtonWithIcons;

const styles = StyleSheet.create({
  button: {
    width: DEFAULT_METRIC,
    height: DEFAULT_METRIC,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
