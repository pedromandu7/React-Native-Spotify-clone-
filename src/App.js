import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import LibraryScreen from './screens/library';
import ModalSearch from './screens/search/modal';
import {HomeStackScreen, PlayStackScreen, SearchStackScreen} from '.';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            console.log(size + ' primeirooooooo')
            if (size == undefined || size == null) {
              size = 25
            }
            console.log(size + ' Segundoooooooooo')
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Search':
                iconName = 'search';
                break;
              case 'Your Library':
                iconName = 'book';
                break;
            }
            return <Icon name={iconName} size={size} color={'#848484'} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#848484',
          style: {
            backgroundColor: '#2E2E2E',
            paddingLeft: 22,
            paddingRight: 22,
          },
        }}>
        {/* <Tab.Screen name="Play" component={PlayStackScreen} /> */}
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        <Tab.Screen name="Your Library" component={LibraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}