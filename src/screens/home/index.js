// import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import moment from 'moment';

// import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import TopItem from '../../components/TopItem';
import ListCard from '../../components/ListCard';
import SettingsScreen from '../settings';

const images = [
  {
    id: 0,
    title: 'Liked Songs',
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dyUNhdbAzYSMeeop39BBHx3WNUjfEs0lG9x2GR-fYCbhBtAPatMi3wiE3Uvg8_-B&usqp=CAU',
  },
  {
    id: 1,
    title: 'Daily Mix 1',
    uri:
      'https://dailymix-images.scdn.co/v2/img/ebdc228fcf59b98c420b50d12c5f215d5df1ee25/1/en/large',
  },
  {
    id: 2,
    title: 'Daily Mix 2',
    uri:
      'https://dailymix-images.scdn.co/v2/img/271c672ac7a84a95f3c557177a29b8936923d152/2/en/large',
  },
  {
    id: 3,
    title: 'Daily Mix 3',
    uri:
      'https://dailymix-images.scdn.co/v2/img/339b4f2b8fa072d2130ad69cd603919e6279258e/3/en/large',
  },
  {
    id: 4,
    title: 'Daily Mix 4',
    uri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwOFdhSGA_Pi14d1Qws2iHZrR6B-RA_60lo9tgoACvRymZmZO1ee8MPb12Q9ho79pe2i0&usqp=CAU',
  },
  {
    id: 5,
    title: 'Difude cleitin',
    uri:
      'data:image/jpeg;base64,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',
  },
];
const data = [
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something',
    color: '#2E2E2E',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something two',
    color: 'blue',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something three',
    color: '#123654',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something four',
    color: 'purple',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something five',
    color: 'pink',
  },
  {
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something six',
    color: 'gray',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#1C1C1C',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              {greet(hour)}
            </Text>
            <Icon
              name="cog"
              size={25}
              color="#ffffff"
              onPress={() => navigation.navigate('PlayScreen')}
            />
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              flexDirection: 'row',
              height: 200,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                marginLeft: 15,
              }}>
              <TopItem label={images[0].title} imageUrl={images[0].uri} />
              <TopItem label={images[1].title} imageUrl={images[1].uri} />
              <TopItem label={images[2].title} imageUrl={images[2].uri} />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                marginRight: 15,
              }}>
              <TopItem label={images[3].title} imageUrl={images[3].uri} />
              <TopItem label={images[4].title} imageUrl={images[4].uri} />
              <TopItem label={images[5].title} imageUrl={images[5].uri} />
            </View>
          </View>
          <View style={{maxHeight: 250, marginLeft: 15}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginTop: 20,
                marginBottom: 20,
                color: 'white',
              }}>
              Recently played
            </Text>
            <ListCard dataList={data} />
          </View>
          <View style={{maxHeight: 250, marginLeft: 15}}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginBottom: 20,
                color: 'white',
              }}>
              Spotify original & exclusive shows
            </Text>
            <ListCard dataList={data} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

let date = new Date();
const hour = date.getHours();

function greet(hours) {
  if (hours > 5 === hours < 12) {
    return 'Good morning';
  } else if (hours >= 12 === hours <= 18) {
    return 'Good afternoon';
  } else if (hours > 18 === hours <= 24) {
    return 'Good evening';
  } else {
    return 'Good night';
  }
}

export default HomeScreen;