import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import LibraryScreen from '../library';
import PlayScreen from '../play';
const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
