import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//icons
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//screen components 
import Home from './components/Home'
import Liked from './components/Liked'
import Profile from './components/Profile'
import Details from './components/Details'
// colors module
import colors from './assets/colors/colors'
// navigation modules 
import { createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
 
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const TabNavigator =()=>{
  return(
  <Tab.Navigator
  tabBarOptions={{
    style: styles.tabBar,
    activeTintColor:colors.orange,
    inactiveTintColor:colors.gray,
    showLabel: false
  }}> 
  <Tab.Screen name={'Home'} component={Home} options={{tabBarIcon:({color})=> <Ionicons name="home-outline" size={32} color={color} />}}/>
  <Tab.Screen name= {'Liked'} component={Liked} options={{tabBarIcon:({color})=><AntDesign name="hearto" size={32} color={color} />}}/>
  <Tab.Screen name= {'Profile'} component={Profile} options={{tabBarOptions:({color})=><AntDesign name="user" size={32} color={color} />}}/>
  </Tab.Navigator>
  )
}

const styles= StyleSheet.create({
  tabBar:{
    backgroundColor:colors.white,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  }
})

export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}}/> 
         <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/> 
       </Stack.Navigator>
     </NavigationContainer>


  );
}


