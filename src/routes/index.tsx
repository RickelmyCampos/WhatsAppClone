import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@screens/Home';
import {useAppSelector} from '@hooks/reduxHooks';
import {colors} from '@styles/colors';
import Chat from '@screens/Chat';
import { RootStackParamList } from '@types';

const Stack = createStackNavigator<RootStackParamList>();
const Routes = () => {
  const theme = useAppSelector(state => state.theme);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.colors.header},
        headerTintColor: theme.colors.text,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Whatsapp Clone'}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{title: 'Nome da pessoa'}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
