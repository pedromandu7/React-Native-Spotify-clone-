import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './screens/home';
import PlayScreen from './screens/play';
import SearchScreen from './screens/search';
import LibraryScreen from './screens/library';

const Tab = createBottomTabNavigator();
const {Navigator} = Tab;

const TabNavigation = () => {
  return (
<Navigator
      initialRouteName="Home"
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
      })}>
      {/* <Tab.Screen name="Play" component={PlayStackScreen} /> */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Your Library" component={LibraryScreen} />
    </Navigator>
  );
};

export default TabNavigation;