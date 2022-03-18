import React, {useState} from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import Header from './components/Header';
const App = () => {

  return(
    <View style = {styles.container}>
      <View style={styles.topContainer}>
      <View style={styles.one}><Text style={styles.text}>1</Text></View>
      <View style={styles.two}><Text style={styles.text}>2</Text></View>
      <View style={styles.three}><Text style={styles.text}>3</Text></View>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.text}>4</Text>
      </View>
      <View style={styles.thirdContainer}>
        <Text style={styles.text}>5</Text>
      </View>
      <View style={styles.fourthContainer}>
        <View style={styles.six}><Text style={styles.text}>6</Text></View>
      <View style={styles.seven}><Text style={styles.text}>7</Text></View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  one:{
    justifyContent: 'center',
    flex: 1,
    backgroundColor: "lightblue"
  },
  two:{
    justifyContent: 'center',
    flex: 2,
    backgroundColor: "purple"
  },
  three:{
    justifyContent: 'center',
    flex: 3,
    backgroundColor: "yellow"
  },
  secondContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'red'
  },
  thirdContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'green'
  },
  fourthContainer: {
    flexDirection: 'row',
    flex: 5,
    backgroundColor: 'green'
  },

  six: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: "white"
  },

  seven: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: "blue"
  },

  text:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic'
    
  },

})

export default App;