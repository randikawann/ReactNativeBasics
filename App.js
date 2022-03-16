import React, {useState} from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import Header from './components/Header';
const App = () => {

  const [name, setName] = useState('Mash');

  const changeStates = () => {
    if(name == 'Mash'){
      setName('Clicked button')
    }else{
      setName('Mash')
    }
  }


  return(
    <View style = {styles.container}>
      <Header title='Shopping list'/>

      <Text style = {styles.bodytext}>This is text {name}</Text>
      <Button title='Click here to changed button' onPress={changeStates}></Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
  },
  bodytext:{
    color: 'red'
  }
})

export default App;