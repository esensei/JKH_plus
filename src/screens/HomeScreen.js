import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import LinearGradient from "react-native-linear-gradient"

const HomeScreen = (props) => {
  const { buttonContainer, container, h1 } = styles
  return (
    <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={container}>
      <StatusBar  translucent backgroundColor="transparent"/>

      <TouchableOpacity onPress={() => props.navigation.navigate('SearchUkScreen')} style={buttonContainer}>
        <Text style={h1}>Поиск компаний ЖКХ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={buttonContainer}>
        <Text style={h1}>Услуги ЖКХ</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
  paddingHorizontal: 15
  },
  buttonContainer: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {
      height: 1,
      width: 1
    }, // IOS
    shadowOpacity: 2, // IOS
    shadowRadius: 2, //IOS
    elevation: 2, // Android
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 17,
    justifyContent: 'center',
    alignContent: 'center',
    height: 60
  },
  h1: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center'
  }
})

export default HomeScreen
