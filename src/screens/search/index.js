import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/FontAwesome';

{
  /* <View>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              fontWeight: 'bold',
              marginTop: 35,
            }}>
            Search
          </Text> */
}
const SearchScreen = () => {
  
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={{backgroundColor: 'red', margin: 15}}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              fontWeight: 'bold',
              marginTop: 35,
            }}>
            Search
          </Text>
          <TextInput
            style={{height: 40, margin: 12, borderWidth: 1, fontWeight: 'bold'}}
            onChangeText={onChangeText}
            placeholder="Artists, songs, or podcasts"
            keyboardType="text"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const stylesInput = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
export default SearchScreen;
