import {
  View,
  Text,
  Modal,
  Pressable,
  ViewStyle,
  StyleProp,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {Box} from '@components/index';
interface ModalComponentProps {
  visible?: boolean;
  handleClose?: () => {} | void;
  modalContent?: React.FC;
  style?: StyleProp<ViewStyle>;
  styleContent?: StyleProp<ViewStyle>;
  background?: string | 'default';
}
const ModalComponent: React.FC<ModalComponentProps> = ({
  visible,
  handleClose,
  modalContent,
  style,
  background,
  styleContent,
}) => {
  return (
    <SafeAreaView >
      <Modal
        statusBarTranslucent={true}
        visible={visible}
        animationType="fade"
        transparent={true}>
        <Pressable
          style={[
            {
              backgroundColor:
                background == 'default' ? 'rgba(0,0,0,0.5)' : background,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            },
            style,
          ]}
          onPress={handleClose}>
          <Box style={styleContent} >
            <Pressable style={{}} onPress={() => {}}>
              {modalContent}
            </Pressable>
          </Box>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default ModalComponent;
