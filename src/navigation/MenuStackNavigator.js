import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen'
import SearchUk from '../screens/SearchUK'

const Stack = createStackNavigator();

const MenuStackNavigator = (props) => {

  console.log(props.navigation)
  return (
    <Stack.Navigator
      initialRouteName={"HomeScreen"}>
      <Stack.Screen
        name="HomeScreen"

        component={HomeScreen}
        options={{
          props: props,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchUkScreen"
        component={SearchUk}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )

}


export default MenuStackNavigator
