
import React, {useState} from 'react';
import {View, Text , StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const stack = createStackNavigator();
 
function ScreenA({navigation}){

  const onPressHandler = () => {
    // navigation.navigate('Screen_B')
    navigation.replace('Screen_B')
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

function ScreenB({navigation}){

  const gobackfuntion = () => {
    navigation.navigate('Screen_A')
    // navigation.goBack();
  }

  return(
    <View style = {styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable style={styles.button}> 
        <Text onPress={gobackfuntion}>Go back</Text>
      </Pressable>
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
  },

  button: {
    backgroundColor: 'blue',
  },

  button_text: {
    color: 'white',
  } ,
  text: {
    fontSize: 30,
  }
})

export default App;