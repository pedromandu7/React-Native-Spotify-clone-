import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';
import LibraryMusic from '../../components/LibraryMusic';
import LibraryPodcast from '../../components/LibraryPodcast';

// import Icon from 'react-native-vector-icons/FontAwesome';

const LibraryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#2F2C2B'}}>
      <ScrollView style={{margin: 15}}>
        <View style={styles.viewTop}>
          <View>
            <Text style={styles}>Library is here</Text>
          </View>
          <View>
            <Text style={styles}>Library is here</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  viewTop: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default LibraryScreen;
