import 'react-native-gesture-handler';


import * as React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from "react-native-linear-gradient"
import { API_URL } from './src/config'
import SignInScreen from './src/login_pages/LoginNavigator'
import { AuthContext } from './src/contexts/AuthContext'
const axios = require('axios')


function SplashScreen() {
  const { container, indicator } = styles
  return (
    <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={container}>
      <ActivityIndicator styles={indicator} />
    </LinearGradient>
  )
}

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

const Stack = createStackNavigator();

 const App = ({ navigation }) => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        console.log(data)
        console.log(API_URL + '/auth/sign-in')

        axios.post(API_URL + '/auth/sign-in', data)
          .then(response => {
            console.log(response.data.token)
            dispatch({ type: 'SIGN_IN', token: response.data.token });

          })
          .catch(error => {
            console.log(error.response)
            alert('Неправильный логин или пароль')
          })

      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (

            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{

                headerShown: false,
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (

            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default App
const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})
