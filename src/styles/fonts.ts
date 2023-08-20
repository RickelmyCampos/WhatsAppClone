import {StyleProp, TextStyle} from 'react-native';

interface Fonts {
  fontNormal: StyleProp<TextStyle>;
  fontLarge: StyleProp<TextStyle>;
  fontHeader: StyleProp<TextStyle>;
  fontSmall: StyleProp<TextStyle>;
}
export const fonts: Fonts = {
  fontLarge: {
    fontSize: 30,
  },
  fontNormal: {
    fontSize: 18,
  },
  fontSmall: {
    fontSize: 16,
  },
  fontHeader: {
    fontSize: 24,
    fontWeight: '400',
  },
};
