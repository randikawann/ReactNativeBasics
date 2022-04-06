import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TextInput, Alert } from 'react-native'
import CustomButton from '../utils/CustomButton'

export default function Login(){

    const [name, setName] = useState('')

    const setData = () => {
        if(name.length==0){
             Alert.alert('Warning!', "Please type your name")
        }
    }


    return (
        <View style = {styles.body}>
            <Image 
                style = {styles.logo}
                source = {require('../../assets/done.png')}
            />
            <Text style = {styles.headerText}>
                Async Storage
            </Text>
            <TextInput 
                style = {styles.inputbox}
                placeholder = 'Enter your name'
                onChangeText={(value) => setName(value)}
            
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
        marginTop: 130,
        marginBottom: 10,
    },
    customButton: {
        alignItems: 'center',
        alignContent: 'center'
    }
})