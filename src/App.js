import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from './screens/home';
import PlayScreen from './screens/play';
import SearchScreen from './screens/search';
import LibraryScreen from './screens/library';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Play" component={PlayScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Your Library" component={LibraryScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

//* <Ionicons name={'home'} size={size} color={color} /> /*/}