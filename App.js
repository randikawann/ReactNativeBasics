import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
const App = () => {

  const [items, setItems] = useState([
    {key:'1', name: 'item 1'},
    {key:'2', name: 'item 2'},
    {key:'3', name: 'item 3'},
    {key:'4', name: 'item 4'},
    {key:'5', name: 'item 5'},
  
  
  ])


  return(
    <View style = {styles.container}>
      <FlatList 
      data={items}
      renderItem = {({item}) => (
        <View style={styles.item}>
              <Text style= {styles.text}>{item.name}</Text>
        </View>
      )}
      />
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