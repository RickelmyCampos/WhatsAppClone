import {View, Text, Button, StyleSheet, FlatList, Image} from 'react-native';
import React, { useState } from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {setTheme} from '../../redux/features/themeSlice';
import Box from '../../components/Box';
import {colors} from '../../styles';
import {Avatar} from '@rneui/themed';
const listData = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
const Home = () => {
  const theme = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();
  const [alterBgImage,setAlterBgImage]=useState(false);
  const contactView = () => {
    return (
      <Box
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        padding={5}>
        <Box direction="row" gap={8} alignItems="center">
          <Avatar
          avatarStyle={{backgroundColor:alterBgImage?'red':undefined}}
          onPress={()=>{console.log("APERTORU NO AVATAR")}}
           onPressIn={()=>setAlterBgImage(true)}
           onPressOut={()=>setAlterBgImage(false)}
            source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
            rounded
          />
          <Box>
            <Text style={styles.textNames}>Nome</Text>
            <Text style={styles.textMessages}>Last Mensage</Text>
          </Box>
        </Box>
        <Box>
          <Text style={styles.textMessages}>23:23</Text>
        </Box>
      </Box>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Box
        bg={colors.dark6}
        flex={1}
        justifyContent="center"
        alignItems="flex-start">
        <Text style={styles.textTitle}> WhatsApp Clone</Text>
      </Box>
      <Box flex={10} bg={colors.dark7}>
        <FlatList data={listData} renderItem={contactView} />
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
  textNames: {
    color: colors.white,
    fontWeight: 'normal',
    fontSize: 16,
  },
  textMessages: {
    color: colors.grey,
    fontWeight: 'normal',
    fontSize: 12,
  },
});
