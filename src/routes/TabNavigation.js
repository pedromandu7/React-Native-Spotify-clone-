import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/home';
import LibraryScreen from '../screens/library';
import SearchScreen from '../screens/search';
import SearchInput from '../screens/search/searchInput';

const Tab = createBottomTabNavigator();
const {Navigator} = Tab;

const TabNavigation = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#848484',
        style: {
          backgroundColor: '#2E2E2E',
          paddingLeft: 22,
          paddingRight: 22,
        },
      }}
      initialRouteName="Home"
      color="#2E2E2E"
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
      <Tab.Screen name="Search" component={SearchInput, SearchScreen} onPrees />
      <Tab.Screen name="Your Library" component={LibraryScreen} />
    </Navigator>
  );
};

export default TabNavigation;
