import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import SectionList from 'react-native/Libraries/Lists/SectionList';
import Header from './components/Header';
const App = () => {

  const onPressHandler = () => {
    Alert.alert("Greatings", "Hi darling")
  }
  return(
    <View style = {styles.container}>
      
      <TouchableWithoutFeedback   
        onPress={onPressHandler}>
          <View style={styles.button} >
            <Text>Button</Text>
          </View>
      </TouchableWithoutFeedback>
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
    backgroundColor: 'blue',
    color: 'white',
    width: 100,
    height: 50,
    alignItems: 'center'
  }

})

export default App;