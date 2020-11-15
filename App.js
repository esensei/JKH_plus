import 'react-native-gesture-handler';
import * as React from 'react';
import {
  StatusBar,
} from 'react-native'
import store from './src/stores'
import { Provider } from 'react-redux'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDispatch } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator'
import StackNavigator from './src/navigation/StackNavigator'

const App = () => {
  const Drawer = createDrawerNavigator();


  return (
    <Provider store={store}>

      <NavigationContainer>
          <Drawer.Navigator>

            <Drawer.Screen name="Login" component={StackNavigator}  />
             <Drawer.Screen name="App" component={TabNavigator} />
          </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App
