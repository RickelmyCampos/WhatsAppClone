import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface ThemeState{
  value: "dark"|"light"
}
const initialState:ThemeState = {
  value: "dark"
}
const todosSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state,action:PayloadAction<"dark"|"light">)=>{
       state.value = action.payload    
    },
    
  },
});

export const {setTheme} = todosSlice.actions;
export default todosSlice.reducer;
