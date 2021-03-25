import React from 'react';
import {SafeAreaView, StyleSheet, Modal, TextInput, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SearchCard from '../../components/SearchCard';



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

const SearchScreen = () => {
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#2E2E2E'}}>
        <View style={{backgroundColor: '#2E2E2E', margin: 15}}>
          <Text style={styles.title}>Search</Text>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              onPress={() => navigation.navigate('MyModal')}
              placeholder="Artists, songs, or podcasts"
              // keyboardType="text"
            />
          </View>
          <Text style={styles.text}>Your top genres</Text>
          <SearchCard textCard1={'Pop'} textCard2={'Rock menino'} />
          <Text style={styles.text}>Popular podcast categories</Text>
          <SearchCard textCard1={'de novo qualquer texto'} />
          <Text style={styles.text}>Browzer all</Text>
          <SearchCard textCard1={'de novo qualquer'} />
          <SearchCard textCard1={'de novo qualquer'} />
          <SearchCard textCard1={'de novo qualquer'} />
          <SearchCard textCard1={'de novo qualquer'} />
          <SearchCard textCard1={'de novo qualquer'} />
          <SearchCard textCard1={'de novo qualquer'} />
          <SearchCard textCard1={'de novo qualquer'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 35,
  },
  input: {
    height: 40,
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 4,
    borderColor: 'white',
    color: '#2E2E2E',
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
});
export default SearchScreen;
