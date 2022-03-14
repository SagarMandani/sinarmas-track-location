import React, {useEffect} from 'react';
import RootNavigation from './src/routes/RootNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';
import {LogBox} from 'react-native';

/*========================================================
 * function Name: App
 * function Purpose: Configure Redux, RootNavigation
 * function Parameters: default props,
 * function ReturnType: view
 * function Description: It configures Redux, RootNavigation
 *=====================================================*/

const App = () => {
  LogBox.ignoreAllLogs(true);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
