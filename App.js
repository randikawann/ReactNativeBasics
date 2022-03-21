import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import SectionList from 'react-native/Libraries/Lists/SectionList';
import Header from './components/Header';
const App = () => {

  return(
    <View style = {styles.container}>
      
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

})

export default App;