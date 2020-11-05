import 'react-native-gesture-handler';
import * as React from 'react';
import {
  AsyncStorage,
} from 'react-native'
import store from './src/stores'
import { Provider } from 'react-redux'

import { createDrawerNavigator } from '@react-navigation/drawer';


import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator'
import StackNavigator from './src/navigation/StackNavigator'
import {takeToken} from './src/actions'

const App = () => {
  const Drawer = createDrawerNavigator();


  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
      }
      takeToken(userToken)
      console.log("токен "  + userToken)
    };

     bootstrapAsync();
  }, []);



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
