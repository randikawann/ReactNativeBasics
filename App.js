import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style = {styles.container}>
      <Text style={styles.text}>Hellow</Text>
      <Image source={{uri: 'https://i.guim.co.uk/img/media/d1a8023b09fb6f46fafed7566e742e4eb5fc0c43/0_1889_3648_2189/master/3648.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9f94239a31f81093d07216f42caf900e'}} style={styles.img}/>


    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'darkslateblue',
    fontSize:30,
  
  },

  img: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
  }
})

export default App;