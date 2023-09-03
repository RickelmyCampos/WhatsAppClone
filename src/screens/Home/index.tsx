import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {Conversation} from 'src/interfaces/interfaces';
import {colors} from '@styles/colors';
import {HomeScreenRouteProp} from '@types';
import {listData} from '../../data/data';
import {hourFormated, todayDateFormated} from '@utils/date';
import {ModalComponent,Box,ConversationComponent, ModalProfile} from '@components/index';
import { closeModal, showModal } from '@redux/features/modalProfileSlice';

const Home = ({navigation, route}: HomeScreenRouteProp) => {
  const theme = useAppSelector(state => state.theme);
  const modalProfile = useAppSelector(state => state.modalProfile);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    hourFormated(new Date());
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="abrir" onPress={() => setOpenModal(true)} />
      <ModalComponent visible={modalProfile.isVisible} handleClose={()=>{dispatch(closeModal())}} modalContent={()=>(<ModalProfile data={modalProfile.data} theme={theme}/>)} />
      <Box flex={1} bg={theme.colors.background}>
        <FlatList
          data={listData}
          renderItem={({item}) => (
            <ConversationComponent
            openModal={()=>{dispatch(showModal(item))}}
              item={item}
              navigate={() => navigation.navigate('Chat', item)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Box>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  textTitle: {
    color: colors.white,
    fontWeight: 'normal',
    fontSize: 20,
  },
});
