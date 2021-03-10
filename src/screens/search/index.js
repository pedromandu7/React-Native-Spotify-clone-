import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#696969'}}>
      <ScrollView>
        <View style={{backgroundColor: '#696969'}}>
          <Text onPress={() => navigation.goBack()}>search here</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
