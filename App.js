import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './redux/reducers/userReducer'
import thunk from 'redux-thunk'
import Nav from './Nav'

const miStore = createStore(userReducer,applyMiddleware(thunk))

const App =()=>{
  return(
    <>
    <Provider store={miStore}>
      <Nav />
    </Provider> 
    </>
  )
}

export default App