import {Text, View} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
  
const Tab1Screen = ({navigation}) => {
  return (
      <View style={{ backgroundColor: '#yellow' }}>
        <View style={{backgroundColor: '#696969', padding: 20}}>
          <Text
            style={{backgroundColor: '#159357', padding: 20}}
            onPress={() => navigation.navigate('Play')}>
            play is here
          </Text>
          <Text
            style={{backgroundColor: '#321321', padding: 20}}
            onPress={() => navigation.navigate('Search')}>
            Search is here
          </Text>
        </View>
        <View style={{flfex: 1}}>
          <Text
            style={{backgroundColor: '#123123', padding: 20}}
            onPress={() => navigation.navigate('Library')}>
            teste1
          </Text>
        </View>
      </View>
  );
};

export default Tab1Screen;
