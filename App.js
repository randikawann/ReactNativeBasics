import React, {useState} from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import Header from './components/Header';
const App = () => {

  const [incrementNumber, setIncrementNumber] = useState(0);
  const [singleIncrement, setSingleIncrement] = useState(0);

  const changeStates = () => {

    setSingleIncrement(singleIncrement+1)
    setIncrementNumber(incrementNumber+5)
  
  }


  return(
    <View style = {styles.container}>
      <Header title='Shopping list'/>

      <View style = {styles.contentContainer}>
      <Text style = {styles.bodytext}>{incrementNumber}</Text>
      <Button title='Increment' onPress={changeStates}></Button>
      <Text style = {styles.bodytext}>You clicked {singleIncrement} times</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  contentContainer:{
    flex: 1,
    alignItems: 'center',
    marginTop: 30
  },
  bodytext:{
    color: 'black'
  }
})

export default App;