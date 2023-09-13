import {Pressable, StyleSheet, Text, View, SectionList} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {ChatScreenRouteProp} from '@types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Box,
  InputText,
  MessageComponent,
  SectionListComponent,
} from '@components/index';
import {useAppSelector} from '@hooks/reduxHooks';
import {FlatList} from 'react-native-gesture-handler';
import {Conversation, Message} from 'src/interfaces/interfaces';
import {Button, LayoutAnimation, Platform, UIManager} from 'react-native';
import groupBy from 'lodash/groupBy';
import {colors} from '@styles/colors';
import {dateFormated, getDateOrToday} from '@utils/date';
interface SectionListData {
  title: string;
  data: Message[];
}
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
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
  const refList = useRef<FlatList>(null);
  const refSection = useRef<FlatList>(null);
  const [messages, setMessages] = useState<Message[]>(data.messages);
  const [messagesFormated, setMessagesFormated] = useState<SectionListData[]>(
    [],
  );
  const theme = useAppSelector(state => state.theme);

  useEffect(() => {
    const messagesCopy = [...messages];
    const listReverted = messagesCopy;
    const groupedList: Message[][] = Object.values(
      groupBy(listReverted, function (n: Message) {
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
  const scrollToEnd = () => {
    if (refSection.current && refList.current && messagesFormated.length > 0) {
      refSection.current.scrollToEnd({animated: false});
    }
  };

  const sendMessage = (message: Message) => {
    setMessages(old => [...old, message]);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Box flex={1} bg={theme.colors.background}>
        <SectionListComponent
          refSection={refSection}
          refList={refList}
          section={messagesFormated}
          onContentSizeChange={() => scrollToEnd()}
          renderSectionHeaderComponent={({title}) => (
            <HeaderSection title={title} />
          )}
          renderItem={({item}) => (
            <MessageComponent item={item} chatUserName={data.name} />
          )}
        />
        <InputText send={sendMessage} />
      </Box>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
