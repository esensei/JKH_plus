import React, { useState, useContext } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


import { AuthContext } from '../contexts/AuthContext'


 const SignInScreen =  (props)  => {
   const { signIn } = React.useContext(AuthContext);


   const [email, setEmail] = React.useState('tinkoff@yandex.ru');
   const [password, setPassword] = React.useState('123');

  console.log("Сразу тут")
   //
    const {
      circle,
      buttonStyle,
      logoContainer,
      logo,
      buttonContainer,
      inputStyles,
      linearGradient
    } = styles
    return (
      <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
        <View style={circle}>
          <View style={logoContainer}>
            <Image style={logo} source={require('../images/user-login-icon.png')}/>
          </View>
          <TextInput
            style={inputStyles}
            value={email}
            onChangeText={(username) => setEmail( username)}
            placeholder="Почта"
          />
          <TextInput
            style={inputStyles}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry
            value={password}
            placeholder="Пароль"
          />
          <TouchableOpacity style={buttonContainer} title="Войти" onPress={() => signIn({ email, password })}>
            <Text style={buttonStyle}>Войти</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    )

}


export default SignInScreen


const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center'
  },

  buttonContainer: {
    backgroundColor: 'rgb(91,132,232)',
    borderRadius: 7,
    justifyContent: 'center',
    height: 38
  },

  buttonStyle: {
    fontFamily: 'System',
    fontSize: 16,
    textAlign: 'center',
    color: 'white'
  },

  logo: {
    width: 100,
    height: 100
  },

  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  },

  inputStyles: {
    height: 38,
    backgroundColor: 'white',
    borderRadius: 7,
    paddingLeft: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(82,130,240,1)'
  },

  circle: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 20,
    flex: 0,
    borderRadius: 13,
    backgroundColor: 'rgba(255,255,255,1)'
  }
})
