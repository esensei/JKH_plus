import React, {useEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import { API_URL } from '../config'
import  axios from 'axios'
const AuthCheckToken = (props) => {
  useEffect(() => {
    console.log('ебанутый')
    whereToNav()
  })

  const whereToNav = async () => {
      AsyncStorage.getItem('userToken').then(token => {
        if (token === null) {
          props.navigation.navigate('SignIn')
        } else {
          axios
            .get(`${API_URL}/check-token`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then((res) => {
              console.log(res)
              props.navigation.navigate('App')
            })
            .catch(e => props.navigation.navigate('SignIn'))
        }})
  }

  const { container, indicator } = styles
  return (
    <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={container}>
      <ActivityIndicator styles={indicator} />
    </LinearGradient>
  )
}

export default AuthCheckToken

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    alignSelf: 'center'
  }
})
