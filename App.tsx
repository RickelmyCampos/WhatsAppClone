/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import Routes from '@routes';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {colors} from '@styles/colors';

const MyTheme = {
  ...DefaultTheme,
  primary: colors.lightGreen,
  background: colors.lightGreen,
  card: colors.lightGreen,
  text: colors.lightGreen,
  border: colors.lightGreen,
  notification: colors.lightGreen,
};

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
