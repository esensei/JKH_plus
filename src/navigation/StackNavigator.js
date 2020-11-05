import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../login_pages/LoginNavigator'
import AuthCheckToken from '../login_pages/AuthCheckToken'

const Stack = createStackNavigator();

const StackNavigator = (props) => {

  console.log(props.navigation)
  return (
    <Stack.Navigator
      initialRouteName={"AuthCheckToken"}>
      <Stack.Screen
        name="AuthCheckToken"

        component={AuthCheckToken}
        options={{
          props: props,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )

}


export default StackNavigator
