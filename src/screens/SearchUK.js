import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient'
import { Provider } from 'react-redux'
const SearchUk = () => {
  return(

    <LinearGradient style={{flex: 1}}  colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']}>
      <StatusBar  translucent backgroundColor="transparent"/>

      <View style={{paddingBottom: 15, paddingTop:25}}>
      <Text style={styles.h1}>Поиск компаний ЖКХ по карте</Text>
      </View>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 56.826137,
        longitude: 60.602489,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        key={1}
        coordinate={{
          latitude: 56.826137,
          longitude: 60.602489,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Marker
        key={2}
        coordinate={{
          latitude: 56.837713,
          longitude: 60.612900,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </MapView>

    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: 300,
    flex: 1
  },
  h1: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  },
  grad: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

export default SearchUk
