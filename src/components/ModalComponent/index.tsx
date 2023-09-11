import {View, Text, Modal, Pressable, ViewStyle, StyleProp} from 'react-native';
import React from 'react';
import {Box} from '@components/index';
interface ModalComponentProps {
  visible?: boolean;
  handleClose?: () => {} | void;
  modalContent?: React.FC;
  style?: StyleProp<ViewStyle>;
}
const ModalComponent: React.FC<ModalComponentProps> = ({
  visible,
  handleClose,
  modalContent,
  style,
}) => {
  return (
    <Modal
      statusBarTranslucent={true}
      visible={visible}
      animationType="fade"
      transparent={true}>
      <Pressable
        style={[
          {
            backgroundColor: 'rgba(0,0,0,0.5)',
            flex: 1,

            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}
        onPress={handleClose}>
        <Box style={{}} bg={'white'}>
          <Pressable style={{}} onPress={() => {}}>
            {modalContent}
          </Pressable>
        </Box>
      </Pressable>
    </Modal>
  );
};

export default ModalComponent;
