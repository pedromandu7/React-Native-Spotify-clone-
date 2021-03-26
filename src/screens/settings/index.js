import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#696969'}}>
      <ScrollView>
        <View style={{padding: 10}}>
          <Icon
            name="angle-down"
            size={30}
            color="#ffffff"
            onPress={() => navigation.goBack()}
          />
          <Icon name="random" size={30} />
          <Text onPress={() => navigation.goBack()}>asdasd</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
