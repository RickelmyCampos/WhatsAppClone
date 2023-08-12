/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import Home from './src/screens/Home';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
