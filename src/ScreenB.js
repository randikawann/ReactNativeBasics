import React, {useState} from 'react';
import {View, Text , StyleSheet, Pressable} from 'react-native';

export default function ScreenB({navigation}){

    const gobackfuntion = () => {
      navigation.goBack();
    }
  
    return(
      <View style = {styles.body}>
        <Text style={styles.text}>Screen B</Text>
        <Pressable style={styles.button}> 
          <Text onPress={gobackfuntion}>Go back</Text>
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