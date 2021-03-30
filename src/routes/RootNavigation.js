import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigation from './TabNavigation';
import PlayScreen from '../screens/play';
import SearchScreen from '../screens/search';
import SearchInput from '../screens/search/searchInput'

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar />
        <RootStack.Navigator
          initialRouteName="Tabs"
          // mode="modal"
        >
          <RootStack.Screen
            name="Tabs"
            component={TabNavigation}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="PlayScreen"
            component={PlayScreen}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="SearchInput"
            component={SearchInput}
            options={{
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default RootNavigation;
