import {Pressable, StyleSheet, Text, View, SectionList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {ChatScreenRouteProp} from '@types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, InputText, MessageComponent} from '@components/index';
import {useAppSelector} from '@hooks/reduxHooks';
import {FlatList} from 'react-native-gesture-handler';
import {Conversation, Message} from 'src/interfaces/interfaces';
import {Button} from 'react-native';
import groupBy from 'lodash/groupBy';
import {colors} from '@styles/colors';
import { dateFormated, getDateOrToday } from '@utils/date';
interface SectionListData {
  title: string;
  data: Message[];
}
const HeaderSection = ({title}: {title: string}) => {
  return (
    <Box
      bg={colors.dark6}
      style={{alignSelf: 'center'}}
      padding={5}
      borderRadius={5}>
      <Text style={{fontSize: 10}}>{getDateOrToday(new Date(title))}</Text>
    </Box>
  );
};
const Chat = ({route, navigation}: ChatScreenRouteProp) => {
  const data = route.params;
  const listRef = useRef<SectionList>(null);
  const [messages, setMessages] = useState<Message[]>(data.messages);
  const [messagesFormated, setMessagesFormated] = useState<SectionListData[]>(
    [],
  );
  const theme = useAppSelector(state => state.theme);

  useEffect(() => {
    const groupedList:Message[][] = Object.values(
      groupBy(messages, function (n: Message) {
        return n.sendDate.substring(0, 10);
      }),
    );
    var data: SectionListData[] = [];
    groupedList.map((d: Message[]) => {
      let section = {
        title: d[0].sendDate,
        data: [...d],
      };
      data.push(section);
    });
    setMessagesFormated(data);
    
  }, [messages]);
useEffect(()=>{
  if (listRef.current != null&&messagesFormated.length>0) {
    listRef.current.scrollToLocation({animated:true,itemIndex:messagesFormated[messagesFormated.length-1].data.length-1,sectionIndex:messagesFormated.length-1,viewPosition:1});
  }
},[messagesFormated])
  const sendMessage = (message: Message) => {
    
    setMessages(old => [...old, message]);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Box flex={1} bg={theme.colors.background}>
        {/* <FlatList
          ref={listRef}
          data={messages}
          renderItem={({item}) => (
            <MessageComponent item={item} chatUserName={data.name} />
          )}
          keyExtractor={(_, index) => index.toString()}
        /> */}
        <SectionList
          ref={listRef}
          sections={messagesFormated}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => (
            <MessageComponent item={item} chatUserName={data.name} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <HeaderSection title={title} />
          )}
        />
        <InputText send={sendMessage} />
      </Box>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
