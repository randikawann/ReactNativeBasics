import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {View, Text , StyleSheet, Pressable} from 'react-native';

import GlobleStyle from '../utils/GlobleStyle';
import CustomButton from '../utils/CustomButton'

export default function Home({navigation}){

  const [name, setName] = useState('');
  const [age, setAge] = useState('')

  useEffect(() => { // this is for onstart method starting the functions
    getData();
  }, [])
  

  const getData = () => {
    try{
      AsyncStorage.getItem('UserData')
        .then(value => {
          if(value !=null){
            let user = JSON.parse(value)
            setName(user.Name)
            setAge(user.Age)
          }
        })
    }catch(error){
      console.log(error)
    }
  }



    const removeData = () => {
      AsyncStorage.removeItem('UserData')
      navigation.navigate('Login')
    }
  
    return(
      <View style = {styles.body}>
        <Text style = {[styles.text, GlobleStyle.CustomFont]}>Welcome to Async sample</Text>

        <Text style = {GlobleStyle.CustomFont}>Here the details name is {name} and age is {age}</Text>

        <CustomButton
          title = 'Remove'
          color = '#ff7f00'
          onPressFunctions = {removeData}
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    body:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    text: {
      fontSize: 30,
    }
  })
