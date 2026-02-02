import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/components/Home.js'
import Profile from './src/components/Profile.js'
import Setting from './src/components/Setting.js'


const Tab = createBottomTabNavigator();


function App() {
  return (
    <>
      <NavigationContainer>
        
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Profile' component={Profile} />
          <Tab.Screen name='Setting' component={Setting} />
        </Tab.Navigator>

      </NavigationContainer>
    </>
  )
}

export default App