import React from 'react'

import { StyleSheet, View, ScrollView, Text, Switch, AsyncStorage } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'


const SettingsScreen = (props) =>  {

  const Logout = () => {
    AsyncStorage
      .removeItem('userToken')
      .then(() => props.navigation.navigate('Login'))
  }
    const {h1, h2, h3, circle, pushCont, h1_logout, container, context, linearGradient} = styles

    return (
      <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
        <ScrollView>
          <View style={circle}>
            <Text style={h1}>Мой аккаунт </Text>
            <Text style={h2}>Ф.И.О.</Text>
            <Text style={h3}>Тиньков Олег{'\n'}Иваныч</Text>
            <Text style={h2}>Адрес</Text>
            <Text style={h3}>Ул. Ленина 46</Text>
            <View style={container}>
              <View style={context}>
                <Text style={h2}>Подъезд</Text>
                <Text style={h3}>1</Text>
              </View>
              <View style={context}>
                <Text style={h2}>Квартира</Text>
                <Text style={h3}>2</Text>
              </View>
              <View>
                <Text style={h2}>Этаж</Text>
                <Text style={h3}>3</Text>
              </View>
            </View>
            <Text style={h2}>Почта</Text>
            <Text style={h3}>tinkoff@yandex.ru</Text>
          </View>
          <View style={circle}>
            <Text style={h1}>Настройки</Text>
            <View style={pushCont}>
              <Text style={h3}>PUSH-уведомления</Text>
              <Switch value={0} thumbColor={'rgba(82,130,240,1)'} />
            </View>
          </View>
          <View style={circle}>
            <Text style={h1}>Мой УК</Text>
            <Text style={h2}>Название</Text>
            <Text style={h3}>ООО "Рога и Копыта"</Text>
            <Text style={h2}>Руководитель</Text>
            <Text style={h3}>Иванов Иван{'\n'}Иваныч</Text>
            <Text style={h2}>Фактический адрес</Text>
            <Text style={h3}>Ул. Ленина 36</Text>
            <Text style={h2}>Телефон</Text>
            <Text onPress={() => call()} style={h3}>8-(800)-555-35-35</Text>
          </View>
          <View style={circle}>
            <Text  style={h1_logout} onPress={() => Logout()}>Выход</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    )

}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  pushCont: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 12
  },

  h1: {
    fontSize: 18,
    color: 'rgba(82,130,240,1)'
  },

  h1_logout: {
    fontSize: 18,
    color: 'red'
  },

  h2: {
    paddingTop: 12,
    color: 'grey',
    fontSize: 16
  },

  h3: {
    fontSize: 16
  },

  linearGradient: {
    flex: 1,
    justifyContent: 'center',

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 25
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
