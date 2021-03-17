import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#2F2C2C'}}>
      <ScrollView style={{padding: 20}}>
        <View style={{backgroundColor: '#696969', padding: 20}}>
          <Text onPress={() => navigation.reset({
     index: 0,
     routes: [{ name: 'Home' }]
})}>search is here</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
