import { API_URL } from '../config'
import { AsyncStorage } from 'react-native'
const axios = require('axios')

export const signIn  =  async (data) => {
  console.log(data)
  console.log(API_URL + '/auth/sign-in')
  axios.post(API_URL + '/auth/sign-in', data)
    .then(response => {
      console.log(response.data.token)

      AsyncStorage.setItem('userToken',response.data.token)
        .then(() =>  {
            dispatch({ type: 'SIGN_IN', token: response.data.token })
          }
        )
        .catch(e => console.log(e))


    })
    .catch(error => {
      console.log(error.response)
      alert('Неправильный логин или пароль')
    })

}

export const signOut =  () => dispatch({ type: 'SIGN_OUT' })

export const signUp =  async (data) => {
  dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
}

export const takeToken =  (token) => dispatch({ type: 'REHYDRATE_TOKEN', token })
