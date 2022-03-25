import React, {useState} from 'react';
import {View, Text , StyleSheet, Pressable} from 'react-native';

export default function ScreenA({navigation}){

    const onPressHandler = () => {
      navigation.navigate('Screen_B')
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
