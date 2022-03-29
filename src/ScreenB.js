import React, {useState} from 'react';
import {View, Text , StyleSheet, Pressable} from 'react-native';

export default function ScreenB({navigation, route}){

  const {ItemName, ItemId} = route.params;
    const gobackfuntion = () => {
      // navigation.goBack();

      navigation.setParams({ItemId: 14})
    }
  
    return(
      <View style = {styles.body}>
        <Text style={styles.text}>Screen B</Text>
        <Pressable style={styles.button}> 
          <Text onPress={gobackfuntion}>Go back</Text>
        </Pressable>

        <Text style={styles.text}>Screen Items: {ItemName}</Text>
        <Text style={styles.text}>Screen Items id: {ItemId}</Text>
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