import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import Header from './components/Header';
const App = () => {

  const [items, setItems] = useState([
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 3'},
    {name: 'item 4'},
    {name: 'item 5'},
  
  ])

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setItems([... items, {name: 'Item 69'}])
    setRefreshing(false)
  }

  return(
    <View style = {styles.container}>
      <FlatList 
        keyExtractor={(item, index) =>  index.toString()}
        data={items}
        renderItem = {({item}) => (
          <View style={styles.item}>
                <Text style= {styles.text}>{item.name}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing = {refreshing} onRefresh={onRefresh} colors= {'red'}/>
        }
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