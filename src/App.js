import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';

import HomeScreen from './screens/home';
import PlayScreen from './screens/play';
import SearchScreen from './screens/search';
import LibraryScreen from './screens/library';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
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
            //Adição do style
            backgroundColor: '#2E2E2E',
            paddingLeft: 22,
            paddingRight: 22,
          },
        }}>
        <Tab.Screen style={{}} name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Play" component={PlayScreen} /> */}
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Your Library" component={LibraryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//* <Ionicons name={'home'} size={size} color={color} /> /*/}
