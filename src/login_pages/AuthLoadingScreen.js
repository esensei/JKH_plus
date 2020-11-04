import React, {useEffect} from 'react'
import { ActivityIndicator, StyleSheet, AsyncStorage
} from 'react-native'

import LinearGradient from 'react-native-linear-gradient'

import { API_URL } from '../config'

const axios = require('axios')

 const AuthLoadingScreen = (props) => {
  useEffect( () => {
     _bootstrapAsync()
  }, [])

  const _bootstrapAsync =  () => {
    AsyncStorage.getItem('apitoken').then(token => {
      if (token === null) {
        props.navigation.navigate('LoginNavigator')
      } else {
        axios
          .get(`${API_URL}/auth/validate`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((res) => {
            console.log(res)
            props.navigation.navigate('BottomNavigator')
          })
          .catch(() => props.navigation.navigate('LoginNavigator'))
      }
    })
  }


    const { container, indicator } = styles
    return (
      <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={container}>
        <ActivityIndicator styles={indicator} />
      </LinearGradient>
    )
}

export default AuthLoadingScreen

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
