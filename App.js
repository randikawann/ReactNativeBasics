import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import Header from './components/Header';
const App = () => {

  const [items, setItems] = useState([
    {key:1, item: 'item 1'},
    {key:2, item: 'item 2'},
    {key:3, item: 'item 3'},
    {key:4, item: 'item 4'},
    {key:5, item: 'item 5'},
    {key:6, item: 'item 6 '},
    {key:7, item: 'item 6 '},
    {key:8, item: 'item 6 '},
    {key:9, item: 'item 6 '},
    {key:10, item: 'item 6 '},
    {key:11, item: 'item 6 '},
    {key:12, item: 'item 6 '},
    {key:13, item: 'item 6 '},
    {key:14, item: 'item 6 '},
    {key:15, item: 'item 6 '},
    {key:16, item: 'item 6 '},
    {key:17, item: 'item 6 '},
    {key:18, item: 'item 6 '},

  ])

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setItems([... items, {key:69, item: 'Item 69'}])
    setRefreshing(false)
  }


  return(
    <View style = {styles.container}>
      <ScrollView refreshControl={
        <RefreshControl refreshing = {refreshing} onRefresh={onRefresh} colors= {'red'}/>}>
        {
          items.map((i) => {return(
            <View style={styles.item} key={i.key}>
              <Text style= {styles.text}>{i.item}</Text>
            </View>
          )})
        }
      </ScrollView>
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