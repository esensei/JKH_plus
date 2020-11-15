import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import AlertsScreen from '../screens/AlertsScreen'
import MenuStackNavigator from './MenuStackNavigator'
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator      barStyle={{ borderBottomWidth: 1, backgroundColor:'orange', borderTopLeftRadius: 25, borderTopRightRadius: 25, borderBottomEndRadius: 25, borderBottomLeftRadius:25, borderColor: 'transparent', overflow: 'hidden', margin: 20 }} >
      <Tab.Screen name="Услуги" component={MenuStackNavigator} options={{tabBarIcon: ({focused}) =>  (
          focused ?
          <Image
            style={styles.bottomImage}
            source={require('../images/bot_menu/bot_menu1_focus.png')}
          /> :
          <Image
            style={styles.bottomImage}
            source={require('../images/bot_menu/bot_menu1.png')}
          />
        )
      }}
       />
      <Tab.Screen name="Информация" component={AlertsScreen} options={{tabBarIcon: ({focused})  =>  (
          focused ?
            <Image
              style={styles.bottomImage}
              source={require('../images/bot_menu/bot_menu2_focus.png')}
            /> :
            <Image
              style={styles.bottomImage}
              source={require('../images/bot_menu/bot_menu2.png')}
            />
        )
      }} />
      <Tab.Screen name="Еще" component={SettingsScreen} options={{tabBarIcon: ({focused}) =>  {
        console.log(focused)
        return (
          focused ?
            <Image
              style={styles.bottomImage}
              source={require('../images/bot_menu/bot_menu3_focus.png')}
            /> :
            <Image
              style={styles.bottomImage}
              source={require('../images/bot_menu/bot_menu3.png')}
            />
        )}
      }}/>

    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  bottomImage: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  }
})


export default BottomTabNavigator
