import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import Home from './views/Home'
import Cities from './views/Cities'
import Create from './views/Create'
import Register from './views/Register'
import {NavigationContainer, StackActions } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Itineraries from './views/Itineraries';
import Itinerary from './views/Itinerary'

const Stack = createStackNavigator()

const Nav =(props)=>{
    
  return(
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:'#1c4573',
                
            },
            headerTitleStyle:{
                color:'#fafafa',
                fontWeight:'bold',
            },
            headerTintColor:'#fafafa'                
        }}>
          <Stack.Screen name='Home' component = {Home} />
          <Stack.Screen name='Create' component = {Create} />
          <Stack.Screen name='Login' component = {Register} />
          <Stack.Screen name='Cities' component = {Cities} />
          <Stack.Screen name='Itineraries' component = {Itineraries} />
          <Stack.Screen name='Itinerary' component = {Itinerary} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Nav