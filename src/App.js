
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

function App(){

  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if(route.name == 'Screen_A'){
                // <i class="far fa-acorn"></i>
              iconName = 'openid';
            }else if(route.name == 'Screen_B'){
              iconName = 'star';
            }

            return (
              <FontAwesomeIcon 
                name= {iconName}
                size = {25}
                color = 'blue'
              />
            )
          }
        })}
      >
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