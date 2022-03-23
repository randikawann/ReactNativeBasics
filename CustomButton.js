import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


// functional components
const MashButton = (props) => {
    return(
        <Pressable   
        style={({pressed}) => [{backgroundColor: pressed ? 'blue': 'red'}, styles.button]}
        // onPress={onPressHandler}
            onPress={props.onPressFunctions}
        >
          <Text style = {styles.text}>{props.title}</Text>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 30,
        marginTop: 10,
        alignSelf: 'center',
        color: 'white',
        width: 100,
        height: 50,
        alignItems: 'center'
      },
    text: {
        color: 'black',
        fontSize: 20,
      },

})

export default MashButton;