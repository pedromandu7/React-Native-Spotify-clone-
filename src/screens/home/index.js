import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#2F2C2C'}}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            marginEnd: 10,
            marginStart: 10,
          }}>
          <View style={{alignItems: 'center'}}>
            <Icon name="angle-down" size={30} color="#ffffff" onPress={() => navigation.navigate('Search')}/>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#ffffff', fontSize: 10}}>
              PLAYING FROM PLAYLIST
            </Text>
            <Text style={{color: '#ffffff', fontSize: 12, fontWeight: 'bold'}}>
              Músicas de estimação
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableHighlight
              underlayColor="22F2C2C"
              style={{width: 18}}
              onPress={() => navigation.navigate('Details')}>
              <Icon name="ellipsis-v" size={30} color="#ffffff" />
            </TouchableHighlight>
          </View>
        </View>
        <View style={{paddingLeft: 20, paddingRight: 20}}>
          <Image
            style={{width: '100%', height: 330}}
            source={{
              uri:
                'https://images.genius.com/8267d6f45cdffed8db78f53fa00991c5.1000x1000x1.jpg',
            }}
          />
        </View>
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: '#ffffff'}}>
              Cinderela Man
            </Text>
            <Text style={{fontSize: 18, color: '#ffffff'}}>EMINEM</Text>
          </View>
          {isLiked && (
            <Icon
              name="heart"
              size={25}
              color="#228B22"
              padding={12}
              // alignItems= 'center'
              onPress={() => setIsLiked(false)}
            />
          )}
          {!isLiked && (
            <Icon
              name="heart"
              size={25}
              color="#ffffff"
              padding={12}
              onPress={() => setIsLiked(true)}
            />
          )}
        </View>
        <View
          style={{
            marginLeft: 25,
            // paddingLeft: 2,
            flexDirection: 'row',
            width: 320,
            height: 3,
            backgroundColor: '#000000',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              width: 105,
              height: 3,
              paddingRight: -20,
              marginLeft: 0,
            }}></View>
          <Icon name="circle" size={7} color="#ffffff" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 25,
            paddingRight: 25,
            justifyContent: 'space-between',
          }}>
          <Text>1:45</Text>
          <Text>3:20</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}>
          {isShuffle && (
            <Icon
              name="random"
              size={27}
              color="#228B22"
              onPress={() => setIsShuffle(false)}
            />
          )}
          {!isShuffle && (
            <Icon
              name="random"
              size={27}
              color="#ffffff"
              onPress={() => setIsShuffle(true)}
            />
          )}
          <Icon name="step-backward" size={30} color="white" />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              width: 70,
              height: 70,
              borderRadius: 50,
            }}>
            {isPlaying && (
              <Icon
                name="pause"
                size={30}
                color="grey"
                onPress={() => setIsPlaying(false)}
              />
            )}
            {!isPlaying && (
              <Icon
                name="play"
                size={30}
                color="grey"
                onPress={() => setIsPlaying(true)}
              />
            )}
          </View>
          <View style={{}}>
            <Icon name="step-forward" size={30} height={500} color="white" />
          </View>
          {/* <Icon name="random" size={28} color="#228B22" /> */}
          <Icon name="minus-circle" size={30} color="white" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', color: '#228B22'}}>
            <Icon name="volume-up" size={20} color="#228B22" />
            <Text style={{color: '#228B22'}}> 3 LISTENING </Text>
          </View>
          <Icon name="align-justify" size={18} color="#ffffff" />
        </View>

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              marginBottom: 50,
              paddingLeft: 15,
              paddingRight: 15,
              paddingTop: 10,
              width: 350,
              height: 300,
              backgroundColor: '#ff0000',
            }}>
            <Text style={{fontSize: 18, color: 'grey'}}>LYRICS</Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'white',
                color: '#ffffff',
              }}>
              aqui tem coragem, aqui tem coragem, aqui tem coragem, aqui tem,
              coragem
            </Text>
            <View style={{alignItems: 'flex-end'}}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginTop: 80,
                  backgroundColor: 'black',
                  borderRadius: 70,
                  padding: 6,
                }}>
                <Icon name="share-alt" color="#ffffff" />
                <Text style={{color: '#ffffff'}}> SHARE</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
