// import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import moment from 'moment';

import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: '#123345', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 25, fontWeight: 'bold'}}
          onPress={() => navigation.navigate('Play')}>
          {greet(hour)}
        </Text>
        <Icon
          name="cog"
          size={25}
          color="#ffffff"
          onPress={() => navigation.navigate()}
        />
      </View>

      <View
        style={{backgroundColor: 'yellow', marginLeft: 15, marginRight: 15}}>
        <View
          style={{
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          <View style={{margin: 5}}>
            <Text
              style={{
                backgroundColor: '#321321',
                padding: 20,
                borderRadius: 7,
              }}
              onPress={() => navigation.navigate('Search')}>
              Arroz, arroz
            </Text>
          </View>
          <View style={{margin: 5}}>
            <Text
              style={{
                backgroundColor: '#321321',
                padding: 20,
                borderRadius: 7,
              }}
              onPress={() => navigation.navigate('Search')}>
              Arroz, arroz
            </Text>
          </View>
          <View style={{margin: 5}}>
            <Text
              style={{
                backgroundColor: '#321321',
                padding: 20,
                borderRadius: 7,
              }}
              onPress={() => navigation.navigate('Search')}>
              Arroz, arroz
            </Text>
          </View>
          <View style={{margin: 5}}>
            <Text
              style={{
                backgroundColor: '#321321',
                padding: 20,
                borderRadius: 7,
              }}
              onPress={() => navigation.navigate('Search')}>
              Arroz, arroz
            </Text>
          </View>
          <View style={{margin: 5}}>
            <Text
              style={{
                backgroundColor: '#321321',
                padding: 20,
                borderRadius: 7,
              }}
              onPress={() => navigation.navigate('Search')}>
              Arroz, arroz
            </Text>
          </View>
          <View style={{margin: 5}}>
            <Text
              style={{
                backgroundColor: '#159159',
                padding: 20,
                borderRadius: 7,
              }}
              onPress={() => navigation.navigate('Search')}>
              Arroz, arroz
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
let momentHour = moment();
console.log(momentHour);
let date = new Date();
const hour = date.getHours();

function greet(hours) {
  if (hours > 5 === hours <= 12) {
    return 'Good day';
  } else if (hours > 12 === hours <= 18) {
    return 'Good afternoon';
  } else if (hours > 18 === hours <= 24) {
    return 'Good evening';
  } else {
    return 'Good night';
  }
}

// function Hour(hours, minutes, seconds) {

// let date = new Date();

// hours = date.getHours();
// minutes = date.getMinutes();
// seconds = date.getSeconds();
// console.log(`${hours}:${minutes}:${seconds}`)

// how to handle the cases where time is one digit
// console.log(`${makeTwoDigits(hours)}:${makeTwoDigits(minutes)}:${makeTwoDigits(seconds)}`)
// }

//<Text
//          style={{backgroundColor: '#123123', padding: 20}}
//          onPress={() => navigation.navigate('Library')}>
//          teste1
//</Text>

// <NavigationContainer independent={true}>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Play"
//           component={PlayScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Search"
//           component={SearchScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Library"
//           component={LibraryScreen}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
