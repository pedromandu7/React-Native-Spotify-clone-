import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const LibraryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#2F2C2B'}}>
      <ScrollView style={{padding: 20}}>
        <View style={{backgroundColor: '#159357', padding: 20}}>
          <Text onPress={() => navigation.goBack()}>Library is here</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LibraryScreen;
