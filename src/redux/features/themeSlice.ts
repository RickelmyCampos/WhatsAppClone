import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {colors} from '@styles/colors';

interface ThemeState {
  dark: boolean;
  colors: Colors;
}
interface Colors {
  primary: string;
  secundary: string;
  background: string;
  notification: string;
  text: string;
  header:string
}
const defaltColors:Colors = {
  primary: colors.lightGreen,
  background: '',
  notification: '',
  secundary: '',
  text: colors.white,
  header:colors.dark7
};
const darkColors:Colors = {
  primary: colors.lightGreen,
  background: '',
  notification: '',
  secundary: '',
  text: colors.white,
  header:colors.dark7
};
const initialState: ThemeState = {
  dark: true,
  colors: defaltColors
};

const todosSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
      if (action.payload) {
        state.colors = darkColors;
      } else {
        state.colors = defaltColors;
      }
    },
  },
});

export const {setTheme} = todosSlice.actions;
export default todosSlice.reducer;
