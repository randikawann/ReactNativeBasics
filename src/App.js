
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';

import Login from './screens/Login';

const Stack = createStackNavigator();

// source time- 03.33.14

function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
      <Stack.Screen 
           name = "Login"
           component={Login}
           options = {
            {
              headerShown: false
            } 
           }
        />
        <Stack.Screen 
           name = "Home"
           component={Home}
           options = {
            {
              headerShown: true
            } 
           }
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App;