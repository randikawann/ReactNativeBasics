
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App(){

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
           name = "Screen_A"
           component={ScreenA}
        />
        <Tab.Screen 
           name = "Screen_B"
           component={ScreenB}
        />
      </Tab.Navigator>

    </NavigationContainer>
  )
}

export default App;