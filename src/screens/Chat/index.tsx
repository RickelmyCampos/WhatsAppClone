import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {ChatScreenRouteProp} from '@types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, InputText, MessageComponent} from '@components/index';
import {useAppSelector} from '@hooks/reduxHooks';
import {FlatList} from 'react-native-gesture-handler';
import {Conversation, Message} from 'src/interfaces/interfaces';
import {Button} from 'react-native';

const Chat = ({route,navigation}: ChatScreenRouteProp) => {
  const data = route.params;
  const listRef = useRef<FlatList>(null);
  const [messages, setMessages] = useState<Message[]>(data.messages);
  const theme = useAppSelector(state => state.theme);
  const sendMessage = (message: Message) => {
    if (listRef.current != null) {
      listRef.current.scrollToEnd({animated: true});
    }
    setMessages(old => [...old, message]);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Box flex={1} bg={theme.colors.background}>
        <FlatList
          ref={listRef}
          data={messages}
          renderItem={({item}) => (
            <MessageComponent item={item} chatUserName={data.name} />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
        <InputText send={sendMessage} />
      </Box>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
