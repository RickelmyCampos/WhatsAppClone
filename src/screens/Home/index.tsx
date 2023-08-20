import {View, Text, Button, StyleSheet, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {Conversation} from 'src/interfaces/interfaces';
import {colors} from '@styles/colors';
import Box from '@components/Box';
import ConversationComponent from '@components/ConversationComponent';
import {HomeScreenRouteProp} from '@types';
import { listData } from '../../data/data';



const Home = ({navigation, route}: HomeScreenRouteProp) => {
  const theme = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box flex={1} bg={theme.colors.background}>
        <FlatList
          data={listData}
          renderItem={({item}) => <ConversationComponent item={item} navigate={()=>navigation.navigate('Chat',item)}/>}
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
