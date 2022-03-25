
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const stack = createStackNavigator();

function App(){

  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen 
           name = "Screen_A"
           component={ScreenA}
        />
        <stack.Screen 
           name = "Screen_B"
           component={ScreenB}
        />
      </stack.Navigator>

    </NavigationContainer>
  )
}

export default App;