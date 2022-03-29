import React, {useState} from 'react';
import {View, Text , StyleSheet, Pressable} from 'react-native';

export default function ScreenA({navigation}){

    const onPressHandler = () => {
      navigation.navigate('Screen_B', {ItemName: 'Here from Screen A', ItemId: 12})
    }
  
    return(
      <View style = {styles.body}>
        <Text>Screen A</Text>
        <Pressable > 
          <Text onPress={onPressHandler}>Go screen B</Text>
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
