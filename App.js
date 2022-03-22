import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import SectionList from 'react-native/Libraries/Lists/SectionList';
import Header from './components/Header';
const App = () => {

  const onPressHandler = () => {
    Alert.alert("User Name", "Hi darling.. "+name)
  }

  const [name, setName] = useState('')

  return(
    <View style = {styles.container}>

      <TextInput 
        style={styles.textInput}
        multiline
        placeholder= {'eg. Randiksd'}
        onChangeText= {(value) => setName(value)}
        keyboardType= 'numeric'
        maxLength= {3}
        editable = {false}
      /> 
      <Pressable   
        style={({pressed}) => [{backgroundColor: pressed ? 'blue': 'red'}, styles.button]}
        onPress={onPressHandler}
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
  },
  textInput: {
    
    width: '100%',
    height: 50,
    margin: 20,
  }

})

export default App;