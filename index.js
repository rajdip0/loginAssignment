/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';

import Store from './src/redux/Store';

const LoginAssignment = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => LoginAssignment);
