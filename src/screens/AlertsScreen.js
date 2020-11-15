import React, { Component } from 'react'

import { StyleSheet, View, ScrollView, Text, Switch } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'


const AlertsScreen = () => {
  const alerts = [{
    title: 'Внимание',
    desc: 'Отключение горячего водоснабжения 13 ноября с 9:00 до 17:00 из-за ремонта',
    date: '12 ноября, 2020 в 18:00'
  },
    {
      title: 'Внимание',
      desc: 'Отключение горячего водоснабжения 13 ноября с 9:00 до 17:00 из-за ремонта',
      date: '12 ноября, 2020 в 18:00'
    },{
      title: 'Внимание',
      desc: 'Отключение горячего водоснабжения 13 ноября с 9:00 до 17:00 из-за ремонта',
      date: '12 ноября, 2020 в 18:00'
    }]
  const { circle, h1, h2, h3, linearGradient } = styles

    return (
      <LinearGradient colors={['rgba(61,78,129,1)', 'rgba(87,83,201,1)', 'rgba(110,127,243,1)']} style={linearGradient}>
        <ScrollView>
          {alerts.map(({title, desc, date}) => (
            <View  style={circle}>
            <Text style={h1}>{title}</Text>
            <Text style={h2}>{desc}</Text>
            <Text style={h3}>{date}</Text>
            </View>
            )
            )}

        </ScrollView>
      </LinearGradient>
    )
}

export default AlertsScreen
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    paddingTop: 25
  },
  h1: {
    fontSize: 16
  },
  h2: {
    marginTop: 8,
    fontSize: 14,
    color: 'black'
  },
  h3: {
    marginTop: 8,
    color: 'rgba(82,130,240,1)',
    fontSize: 12
  },

  circle: {
    padding: 8,
    marginBottom: 20,
    flex: 0,
    borderRadius: 13,
    backgroundColor: 'rgba(255,255,255,1)'
  }
})
