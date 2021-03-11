import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackView} from '@react-navigation/stack';
import PlayScreen from './screens/play';
import DetailsScreen from './screens/details';
import SearchScreen from './screens/search';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Play">
        <Stack.Screen name="Home" component="HomeScreen" options={{headerShown: true}}/>
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
}
