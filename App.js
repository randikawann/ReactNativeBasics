import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import SectionList from 'react-native/Libraries/Lists/SectionList';
import Header from './components/Header';
const App = () => {

  const onPressHandler = () => {

    if(name.length>3){
      Alert.alert("Match", "content is more than 3 characters",[
        {text:'ok', onPress: ()=> console.warn('ok pressed')},
        {text:'Cancel', onPress: ()=> console.warn('cancel pressed')},
        {text:'Pending', onPress: ()=> console.warn('pending pressed')},
      ])
    }else{

    }
    
  }

  const [name, setName] = useState('')

  return(
    <View style = {styles.container}>

      <TextInput 
        style={styles.textInput}
        placeholder= {'eg. Randiksd'}
        onChangeText= {(value) => setName(value)}
      
        // editable = {false}  // can't edit text input
        // secureTextEntry   // show dots for secure text entry
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
    borderColor: 'black',
    borderWidth: 4,
    width: '100%',
    height: 50,
    margin: 20,
  }

})

export default App;