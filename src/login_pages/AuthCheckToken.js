import React, {useEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  ActivityIndicator,
  StyleSheet,
  Text
} from 'react-native'

import { AuthContext } from '../contexts/AuthContext'

const AuthCheckToken = (props) => {
  const { state } = React.useContext(AuthContext);
  useEffect(() => {
    console.log('ебанутый')
    whereToNav()
  })

  const whereToNav = () => {
    // console.log(props)
    // console.log('EEEEE')
    // state().userToken === null ?
    //   console.log(state().userToken)
    //   :
    //   console.log(state().userToken)
  }


  const { container, indicator } = styles
  return (
    <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={container}>
      <ActivityIndicator styles={indicator} />
      <Text>sdfsdfdsfsdf</Text>
    </LinearGradient>
  )
}

export default AuthCheckToken

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
