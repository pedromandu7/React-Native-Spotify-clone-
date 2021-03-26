import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/home';
import PlayScreen from './screens/play';
import SearchScreen from './screens/search';
import LibraryScreen from './screens/library';
import ModalSearch from './screens/search/modal';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const PlayStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarLabel: 'Home!', headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{tabBarLabel: 'Search!', headerShown: false}}
      />
    </SearchStack.Navigator>
  );
}

function PlayStackScreen() {
  return (
    <PlayStack.Navigator>
      <PlayStack.Screen
        name="Play"
        component={PlayScreen}
        options={{tabBarLabel: 'Play!', headerShown: false}}
      />
    </PlayStack.Navigator>
  );
}
 
export {PlayStackScreen, SearchStackScreen, HomeStackScreen,};
