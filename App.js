import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import SectionList from 'react-native/Libraries/Lists/SectionList';
import Header from './components/Header';
const App = () => {

  const onPressHandler = () => {
    Alert.alert("Greatings", "Hi darling..")
  }
  const onLongPressHandler = () => {
    Alert.alert("Greatings", "Hi darling longpress..")
  }

  return(
    <View style = {styles.container}>
      
      <Pressable   
        style={({pressed}) => [{backgroundColor: pressed ? 'blue': 'red'}, styles.button]}
        onPress={onPressHandler}
        android_ripple={{color: '#00f'}}
        >
          <Text>Button</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  text: {
    color: 'black',
    fontSize: 35,
  },

  button: {
    marginTop: 100,
    alignSelf: 'center',
    color: 'white',
    width: 100,
    height: 50,
    alignItems: 'center'
  }

})

export default App;