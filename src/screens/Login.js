import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TextInput, Alert } from 'react-native'
import CustomButton from '../utils/CustomButton'

// source time- 03.33.14

export default function Login({navigation}){

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const setData = async () => {
        if(name.length==0 || age.length == 0){
             Alert.alert('Warning!', "Please type your name")
        }else{
            try{
                var user = {
                    Name: name,
                    Age: age
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user))
                navigation.navigate('Home')
            }catch(error){
                console.log(error)
            }
        }
    }


    return (
        <View style = {styles.body}>
            <Image 
                style = {styles.logo}
                source = {require('../../assets/done.png')}
            />
            <Text style = {styles.headerText}>
                SQLite DB
            </Text>
            <TextInput 
                style = {styles.inputbox}
                placeholder = 'Enter your name'
                onChangeText={(value) => setName(value)}
            
            />

            <TextInput 
                style = {styles.inputbox}
                placeholder = 'Enter your age'
                onChangeText={(value) => setAge(value)}
            
            />

            <CustomButton style = {styles.customButton}
                title = 'Login'
                color = '#1eb900'
                onPressFunctions = {setData}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff'
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
        marginTop: 100,
    },
    headerText: {
        fontSize: 25,
        color: '#ffffff'
    },
    inputbox: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        margin: 10
    },
    customButton: {
        alignItems: 'center',
        alignContent: 'center'
    }
})