// import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const PlayScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#696969'}}>
      <ScrollView>
        <View style={{backgroundColor: '#696969'}}>
          <Text onPress={() => navigation.goBack()}>Play here</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlayScreen;
