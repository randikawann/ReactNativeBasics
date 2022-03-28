
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();


function App(){

  const [batchno, setBatchNo] = useState(3)

  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
           name = "Screen_A"
           component={ScreenA}
           options= {{tabBarBadge: batchno}}
        />
        <Drawer.Screen 
           name = "Screen_B"
           component={ScreenB}
        />
      </Drawer.Navigator>

    </NavigationContainer>
  )
}

export default App;