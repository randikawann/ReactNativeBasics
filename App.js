import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert, ToastAndroid, Modal, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import SectionList from 'react-native/Libraries/Lists/SectionList';
import Header from './components/Header';
const App = () => {

  const onPressHandler = () => {
    // setShowarning(true)

    Alert.alert("submitted"+submitted)
    if(submitted){
      setSubmitted(false)
    }else{
      setSubmitted(true)
    }
  }

  const [name, setName] = useState('')
  const [showWarning, setShowarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return(
    <View style = {styles.container}>

      <Modal
        visible = {showWarning}
        onRequestClose = {() => {setShowarning(false)}}
        transparent // this is for close in back button
        animationType='fade'
        hardwareAccelerated // this is for android for speed popup
      >
        <View style = {styles.warn_container}>
          <View style = {styles.warning_modal}>
            <View style = {styles.warning_title}>
              <Text style={styles.warn_text}>Warning</Text>
            </View>
            <View style={styles.warning_body}>
              <Text>Hi, this is modal popup</Text>
            </View>
            <Pressable
              style={styles.warn_btn}
              onPress={()=> setShowarning(false)}>
              <Text style = {styles.warn_text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
      {submitted ?
              <View style={styles.image_container}>
                <Text style={styles.text}>submitted values</Text>
                <Image style= {styles.image} source= {require('./assets/done.png')}/>
              </View>
              
              : 
              <View style={styles.image_container}>
                <Text style={styles.text}>not submitted values</Text> 
                <Image style= {styles.image} source= {require('./assets/error.png')}/>
              </View>
            
      }
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
    marginBottom: 30,
    marginTop: 10,
    alignSelf: 'center',
    color: 'white',
    width: 100,
    height: 50,
    alignItems: 'center'
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 4,
    height: 50,
    margin: 20,
    marginTop: 100,
  },
  warning_modal:{
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
  },
  warn_container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#00000099'
  },
  warning_title: {
     height:50, 
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#ff0',
     borderTopLeftRadius: 10,
     borderTopRightRadius: 10,
  },
  warn_text : {
    color: 'black',
    fontSize: 35,
    alignItems:'center'
    
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },

  warn_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
     borderBottomRightRadius: 10,
  },

  image: {
    width:100,
    height:100,
    resizeMode: 'stretch',
  },
  image_container: {
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'red'
  }

})

export default App;