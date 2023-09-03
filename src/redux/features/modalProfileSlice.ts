import {Conversation} from '@interfaces/interfaces';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {colors} from '@styles/colors';

export interface ModalProfileState {
  isVisible: boolean;
  data: Conversation;
}

const initialState: ModalProfileState = {
  isVisible: false,
  data: {
    alias: '',
    messages: [],
    name: '',
    number: '',
    profilePicture: '',
    status: '',
  },
};

const modalProfileSlice = createSlice({
  name: 'modalProfile',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<Conversation>) => {
      state.data = action.payload;
      state.isVisible = true;
    },
    closeModal: state => {
      state.data = initialState.data;
      state.isVisible = false;
    },
  },
});

export const {showModal, closeModal} = modalProfileSlice.actions;
export default modalProfileSlice.reducer;
