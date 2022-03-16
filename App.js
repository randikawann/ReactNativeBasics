import React, {useState} from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import Header from './components/Header';
const App = () => {

  const [name, setName] = useState('Mash');
  const [session, setSession] = useState({number:4, states:"fjfdvdf"})

  const changeStates = () => {
    if(name == 'Mash'){
      setName('Clicked button')
    }else{
      setName('Mash')
    }
    setSession({number:session.number+1, states: "fjfddf "+session.number})
  }


  return(
    <View style = {styles.container}>
      <Header title='Shopping list'/>

      <Text style = {styles.bodytext}>This is text {name}</Text>
      <Text style = {styles.bodytext}>Here the session number {session.number} and session name {session.states}</Text>
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