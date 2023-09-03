import {View, Text} from 'react-native';
import React from 'react';
import {
  CardStyleInterpolators,
  TransitionSpecs,
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '@screens/Home';
import {useAppSelector} from '@hooks/reduxHooks';
import {colors} from '@styles/colors';
import Chat from '@screens/Chat';
import {ChatScreenRouteProp, RootStackParamList} from '@types';
import ChatHeader from '@components/ChatHeader';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';
import {FadeInFromBottomAndroidSpec} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';

const config: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const Stack = createStackNavigator<RootStackParamList>();
const Routes = () => {
  const theme = useAppSelector(state => state.theme);
  return (  
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

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
        options={({route, navigation}: ChatScreenRouteProp) => ({
          title: route.params.name,

          header: () => (
            <ChatHeader
              theme={theme}
              chat={route.params}
              navigation={navigation}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default Routes;
