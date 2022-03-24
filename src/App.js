
import React, {useState} from 'react';
import {View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();
 
function ScreenA(){
  return(
    <View>
      <Text>Screen A</Text>
    </View>
  )
}
function App(){

  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen 
           name = "Screen_A"
           component={ScreenA}
        />
      </stack.Navigator>

    </NavigationContainer>
  )
}

export default App;