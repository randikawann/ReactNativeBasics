import React , {useState} from 'react';
import {View, Text, StyleSheet, } from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {uuid} from 'uuidv4';

const App = () => {

  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'Milk',
    },
  ]);

  return(
    <View style = {styles.container}>
      <Header title='Shopping list'/>
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
  },
})

export default App;