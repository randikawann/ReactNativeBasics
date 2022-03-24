
import React, {useState} from 'react';
import {View, Text , StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const stack = createStackNavigator();
 
function ScreenA({navigation}){

  const onPressHandler = () => {
    navigation.navigate('Screen_B')
  }

  return(
    <View style = {styles.body}>
      <Text>Screen A</Text>
      <Pressable > 
        <Text onPress={onPressHandler}>Click here</Text>
      </Pressable>
    </View>
  )
}

function ScreenB(){
  return(
    <View style = {styles.body}>
      <Text>Screen B</Text>
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
        <stack.Screen 
           name = "Screen_B"
           component={ScreenB}
        />
      </stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;