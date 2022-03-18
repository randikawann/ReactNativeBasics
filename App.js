import React, {useState} from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import Header from './components/Header';
const App = () => {

  const [items, setItems] = useState([
    {key:1, item: 'item 1'},
    {key:2, item: 'item 2'},
    {key:3, item: 'item 3'},
    {key:4, item: 'item 4'},
    {key:5, item: 'item 5'},
    {key:6, item: 'item 6 '},
  ])

  return(
    <View style = {styles.container}>
      {
        items.map((i) => {return(
          <View style={styles.item} key={i.key}>
            <Text style= {styles.text}>{i.item}</Text>
          </View>
        )})
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  item: {
    margin: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 35,
  }

})

export default App;