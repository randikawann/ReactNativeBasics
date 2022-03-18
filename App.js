import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import SectionList from 'react-native/Libraries/Lists/SectionList';
import Header from './components/Header';
const App = () => {

  // const [items, setItems] = useState([
  //   {name: 'item 1'},
  //   {name: 'item 2'},
  //   {name: 'item 3'},
  //   {name: 'item 4'},
  //   {name: 'item 5'},
  
  // ])

const [DATA, setDATA] = useState(
  [
    {
      title: 'title 1',
      data: ['title 1-1', 'title 1-2', 'title 1-3']
    },
    {
      title: 'title 2',
      data: ['title 2-1', 'title 2-2', 'title 2-3']
    },
    {
      title: 'title 3',
      data: ['title 3-1']
    },
    {
      title: 'title 4',
      data: ['title 4-1', 'title 4-2', 'title 4-3']
    },
  ]
)

const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setDATA([... items, 
      {
      title: 'title x',
      data: ['title x-1', 'title x-2', 'title x-3']
      }
    ])
    setRefreshing(false)
  }

  return(
    <View style = {styles.container}>
      <SectionList 
        keyExtractor = {(item, index) => index.toString()}
        sections = {DATA}
        renderItem = {({item}) => (
          <View style = {styles.item} >
            <Text style = {styles.text} >{item}</Text>
          </View>
        )}
        renderSectionHeader = {({section})=>(
          <View style = {styles.sectionItem} >
            <Text style = {styles.text} >{section.title}</Text>
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
  },
  sectionItem: {
    margin: 10,
    backgroundColor: 'yellow',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  sectionTitle: {
    color: 'red',
    fontSize: 60,
  },

})

export default App;